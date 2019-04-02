import os
import os.path
from shutil import copyfile, copytree

from funcy import partial, suppress

from ballet.compat import pathlib, safepath
from ballet.exc import BalletError
from ballet.util.log import logger


def spliceext(filepath, s):
    """Add s into filepath before the extension

    Args:
        filepath (str, path): file path
        s (str): string to splice

    Returns:
        str
    """
    root, ext = os.path.splitext(safepath(filepath))
    return root + s + ext


def replaceext(filepath, new_ext):
    """Replace any existing file extension with a new one

    Example::

        >>> replaceext('/foo/bar.txt', 'py')
        '/foo/bar.py'
        >>> replaceext('/foo/bar.txt', '.doc')
        '/foo/bar.doc'

    Args:
        filepath (str, path): file path
        new_ext (str): new file extension; if a leading dot is not included,
            it will be added.

    Returns:
        Tuple[str]
    """
    if new_ext and new_ext[0] != '.':
        new_ext = '.' + new_ext

    root, ext = os.path.splitext(safepath(filepath))
    return root + new_ext


def splitext2(filepath):
    """Split filepath into root, filename, ext

    Args:
        filepath (str, path): file path

    Returns:
        str
    """
    root, filename = os.path.split(safepath(filepath))
    filename, ext = os.path.splitext(safepath(filename))
    return root, filename, ext


def isemptyfile(filepath):
    """Determine if the file both exists and isempty

    Args:
        filepath (str, path): file path

    Returns:
        bool
    """
    exists = os.path.exists(safepath(filepath))
    if exists:
        filesize = os.path.getsize(safepath(filepath))
        return filesize == 0
    else:
        return False


def synctree(src, dst, onexist=None):
    """Recursively sync files at directory src to dst

    This is more or less equivalent to::

       cp -n -R ${src}/ ${dst}/

    If a file at the same path exists in src and dst, it is NOT overwritten
    in dst. Pass ``onexist`` in order to raise an error on such conditions.

    Args:
        src (path-like): source directory
        dst (path-like): destination directory, does not need to exist
        onexist (callable): function to call if file exists at destination,
            takes the full path to destination file as only argument
    """
    src = pathlib.Path(src).resolve()
    dst = pathlib.Path(dst).resolve()

    if not src.is_dir():
        raise ValueError

    if dst.exists() and not dst.is_dir():
        raise ValueError

    if onexist is None:
        def onexist(): pass

    _synctree(src, dst, onexist)


def _synctree(src, dst, onexist):
    if not dst.exists():
        copytree(safepath(src), safepath(dst))
        return

    cleanup = []

    try:
        for root, dirnames, filenames in os.walk(safepath(src)):
            root = pathlib.Path(root)
            relative_dir = root.relative_to(src)

            for dirname in dirnames:
                dstdir = dst.joinpath(relative_dir, dirname)
                if dstdir.exists():
                    if not dstdir.is_dir():
                        raise BalletError
                else:
                    logger.debug(
                        'Making directory: {dstdir!s}'.format(dstdir=dstdir))
                    dstdir.mkdir()
                    cleanup.append(partial(os.rmdir, safepath(dstdir)))

            for filename in filenames:
                srcfile = root.joinpath(filename)
                dstfile = dst.joinpath(relative_dir, filename)
                if dstfile.exists():
                    onexist(dstfile)
                else:
                    logger.debug(
                        'Copying file to destination: {dstfile!s}'
                        .format(dstfile=dstfile))
                    copyfile(srcfile, dstfile)
                    cleanup.append(partial(os.unlink, safepath(dstfile)))

    except Exception:
        with suppress(Exception):
            for f in reversed(cleanup):
                f()
        raise