import pathlib
import tempfile

from cookiecutter.main import cookiecutter as _cookiecutter
from funcy import re_test, walk, walk_values, wraps

from ballet.compat import PathLike
from ballet.project import Project
from ballet.util.fs import synctree
from ballet.util.log import logger
from ballet.validation.project_structure.checks import (
    FEATURE_MODULE_NAME_REGEX, SUBPACKAGE_NAME_REGEX)

TEMPLATES_PATH = pathlib.Path(__file__).resolve().parent.joinpath('templates')
FEATURE_TEMPLATE_PATH = TEMPLATES_PATH.joinpath('feature_template')
PROJECT_TEMPLATE_PATH = TEMPLATES_PATH.joinpath('project_template')


def _stringify_path(obj):
    return str(obj) if isinstance(obj, PathLike) else obj


@wraps(_cookiecutter)
def cookiecutter(*args, **kwargs):
    args = walk(_stringify_path, args)
    kwargs = walk_values(_stringify_path, kwargs)
    return _cookiecutter(*args, **kwargs)


def render_project_template(**cc_kwargs):
    """Generate a ballet project according to the project template

    Args:
        **cc_kwargs: options for the cookiecutter template
    """
    project_template_path = PROJECT_TEMPLATE_PATH
    return cookiecutter(project_template_path, **cc_kwargs)


def render_feature_template(**cc_kwargs):
    """Create a stub for a new feature

    Args:
        **cc_kwargs: options for the cookiecutter template
    """
    feature_template_path = FEATURE_TEMPLATE_PATH
    return cookiecutter(feature_template_path, **cc_kwargs)


def _fail_if_feature_exists(dst):
    subpackage_name, feature_name = str(dst.parent), str(dst.name)
    if (
        dst.is_file()
        and re_test(SUBPACKAGE_NAME_REGEX, subpackage_name)
        and re_test(FEATURE_MODULE_NAME_REGEX, feature_name)
    ):
        raise FileExistsError(
            'The feature already exists here: {dst}'
            .format(dst=dst))


def start_new_feature(contrib_dir=None, **cc_kwargs):
    """Start a new feature within a ballet project

    By default, will prompt the user for input using cookiecutter's input
    interface.

    Renders the feature template into a temporary directory, then copies the
    feature files into the proper path within the contrib directory.

    Args:
        contrib_dir: directory under which to place contributed features
        **cc_kwargs: options for the cookiecutter template

    Raises:
        ballet.exc.BalletError: the new feature has the same name as an
            existing one
    """
    if contrib_dir is None:
        project = Project.from_path(pathlib.Path.cwd().resolve())
        contrib_dir = project.get('contrib', 'module_path')

    with tempfile.TemporaryDirectory() as tempdir:
        # render feature template
        output_dir = tempdir
        cc_kwargs['output_dir'] = output_dir
        rendered_dir = render_feature_template(**cc_kwargs)

        # copy into contrib dir
        src = rendered_dir
        dst = contrib_dir
        result = synctree(src, dst, onexist=_fail_if_feature_exists)

    logger.info('Start new feature successful.')
    return result
