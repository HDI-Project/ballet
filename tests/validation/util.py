from unittest.mock import Mock, patch

import numpy as np
import pandas as pd
from funcy import contextmanager

from ballet.util.git import get_diff_str_from_commits
from ballet.validation.project_structure import (
    ChangeCollector, FeatureApiValidator, FileChangeValidator)

from ..util import make_mock_commit, mock_repo


class SampleDataMixin:
    def setUp(self):
        self.df = pd.DataFrame(
            data={
                'country': ['USA', 'USA', 'Canada', 'Japan'],
                'year': [2001, 2002, 2001, 2002],
                'size': [np.nan, -11, 12, 0.0],
                'strength': [18, 110, np.nan, 101],
                'happy': [False, True, False, False]
            }
        ).set_index(['country', 'year'])
        self.X = self.df[['size', 'strength']]
        self.y = self.df[['happy']]
        super().setUp()


def make_mock_project(repo, pr_num, contrib_module_path):
    project = Mock(repo=repo,
                   pr_num=pr_num,
                   contrib_module_path=contrib_module_path)
    return project


@contextmanager
def mock_project(path_content):
    with mock_repo() as repo:
        for path, content in path_content:
            make_mock_commit(repo, path=path, content=content)
        yield repo


@contextmanager
def null_change_collector(pr_num):
    with mock_repo() as repo:
        commit_range = 'HEAD^..HEAD'
        contrib_module_path = None

        travis_env_vars = {
            'TRAVIS_BUILD_DIR': repo.working_tree_dir,
            'TRAVIS_PULL_REQUEST': str(pr_num),
            'TRAVIS_COMMIT_RANGE': commit_range,
        }

        with patch.dict('os.environ', travis_env_vars, clear=True):
            project = make_mock_project(repo, pr_num, contrib_module_path)
            yield ChangeCollector(project)


@contextmanager
def mock_file_change_validator(
    path_content, pr_num, contrib_module_path
):
    """FileChangeValidator for mock repo and mock project content

    Args:
        path_content: iterable of (relative path, file content)
    """
    with mock_project(path_content) as repo:
        travis_build_dir = repo.working_tree_dir
        travis_pull_request = str(pr_num)
        travis_commit_range = get_diff_str_from_commits(
            repo.head.commit.parents[0], repo.head.commit)

        travis_env_vars = {
            'TRAVIS_BUILD_DIR': travis_build_dir,
            'TRAVIS_PULL_REQUEST': travis_pull_request,
            'TRAVIS_COMMIT_RANGE': travis_commit_range,
        }

        with patch.dict('os.environ', travis_env_vars, clear=True):
            project = make_mock_project(repo, pr_num, contrib_module_path)
            yield FileChangeValidator(project)


@contextmanager
def mock_feature_api_validator(
    path_content, pr_num, contrib_module_path, X, y
):
    """FileChangeValidator for mock repo and mock project content

    Args:
        path_content: iterable of (relative path, file content)
    """
    with mock_project(path_content) as repo:
        travis_build_dir = repo.working_tree_dir
        travis_pull_request = str(pr_num)
        travis_commit_range = get_diff_str_from_commits(
            repo.head.commit.parents[0], repo.head.commit)

        travis_env_vars = {
            'TRAVIS_BUILD_DIR': travis_build_dir,
            'TRAVIS_PULL_REQUEST': travis_pull_request,
            'TRAVIS_COMMIT_RANGE': travis_commit_range,
        }

        with patch.dict('os.environ', travis_env_vars, clear=True):
            project = make_mock_project(repo, pr_num, contrib_module_path)
            project.load_data.return_value = X, y
            yield FeatureApiValidator(project)