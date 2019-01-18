from sklearn_pandas import DataFrameMapper

from ballet.feature import Feature, FeatureOutput


class DependenceDataFrameMapper(DataFrameMapper):
    def __init__(self, features):
        self.features = features
        (sorted_feature_nodes, feature_nodes_by_src) = _construct_feature_DAG(features)
        
    
    def _transform(self, X, y=None, do_fit=False):
        extracted = []
        self.transformed_names_ = []
        for columns, transformers, options in self.built_features:
            input_df = options.get('input_df', self.input_df)

            # columns could be a string or list of
            # strings; we don't care because pandas
            # will handle either.
            Xt = self._get_col_subset(X, columns, input_df)
            if transformers is not None:
                with add_column_names_to_exception(columns):
                    if do_fit and hasattr(transformers, 'fit_transform'):
                        Xt = _call_fit(transformers.fit_transform, Xt, y)
                    else:
                        if do_fit:
                            _call_fit(transformers.fit, Xt, y)
                        Xt = transformers.transform(Xt)
            extracted.append(_handle_feature(Xt))

            alias = options.get('alias')
            self.transformed_names_ += self.get_names(
                columns, transformers, Xt, alias)


def _construct_feature_DAG(features):
    """
    Topologically sort features such that f1 comes before f2 if f2 depends on f1
    @param features the list of features to sort.
    @returns a list of feature nodes, topologically sorted.
    """
    sorted_feature_nodes=[]
    feature_nodes_by_src = {}
    feature_nodes = []
    for feature in features:
        if feature.source not in feature_nodes_by_src:
            _explore_feature_DAG(feature, sorted_feature_nodes, feature_nodes_by_src)
    return (sorted_feature_nodes, feature_nodes_by_src)
    
def _explore_feature_DAG(feature, sorted_feature_nodes, feature_nodes_by_src):
    feature_node = FeatureDAGNode(feature)
    feature_nodes_by_src[feature.source] = feature_node
    for feature_input in feautre.input:
        if isinstance(feature_input, FeatureOutput):
            parent_feature = feature_input.feature
            if parent_feature.source not in feature_nodes_by_src:
                _explore_feature_DAG(parent_feature, sorted_feature_nodes, feature_nodes_by_src)
            feature_node.add_parent(feature_nodes_by_src[parent_feature.source])
            feature_nodes_by_src[parent_feature.source].add_child(feature_node)
    sorted_feature_nodes.append(feature_node)

class FeatureDAGNode:
    def __init__(self, feature, parents=[], children=[]):
        self.feature = feature 
        self.parents = parents
        self.children = children
        self.output = None

    def add_child(self, feature):
        self.children.append(feature)
    
    def add_parent(self, feature):
        self.parents.append(feature)