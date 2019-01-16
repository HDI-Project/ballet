Search.setIndex({docnames:["api/ballet","api/ballet.compat","api/ballet.contrib","api/ballet.eng","api/ballet.eng.base","api/ballet.eng.misc","api/ballet.eng.missing","api/ballet.eng.ts","api/ballet.exc","api/ballet.feature","api/ballet.modeler","api/ballet.modeling","api/ballet.modeling.constants","api/ballet.modeling.io_transformers","api/ballet.modeling.problem","api/ballet.modeling.scoring","api/ballet.project","api/ballet.quickstart","api/ballet.util","api/ballet.util.ci","api/ballet.util.fs","api/ballet.util.git","api/ballet.util.io","api/ballet.util.log","api/ballet.util.mod","api/ballet.util.testing","api/ballet.validation","api/ballet.validation.base","api/ballet.validation.diff_checks","api/ballet.validation.feature_api_checks","api/ballet.validation.feature_evaluation","api/ballet.validation.project_structure","api/modules","authors","contributing","history","index","installation","readme","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api/ballet.rst","api/ballet.compat.rst","api/ballet.contrib.rst","api/ballet.eng.rst","api/ballet.eng.base.rst","api/ballet.eng.misc.rst","api/ballet.eng.missing.rst","api/ballet.eng.ts.rst","api/ballet.exc.rst","api/ballet.feature.rst","api/ballet.modeler.rst","api/ballet.modeling.rst","api/ballet.modeling.constants.rst","api/ballet.modeling.io_transformers.rst","api/ballet.modeling.problem.rst","api/ballet.modeling.scoring.rst","api/ballet.project.rst","api/ballet.quickstart.rst","api/ballet.util.rst","api/ballet.util.ci.rst","api/ballet.util.fs.rst","api/ballet.util.git.rst","api/ballet.util.io.rst","api/ballet.util.log.rst","api/ballet.util.mod.rst","api/ballet.util.testing.rst","api/ballet.validation.rst","api/ballet.validation.base.rst","api/ballet.validation.diff_checks.rst","api/ballet.validation.feature_api_checks.rst","api/ballet.validation.feature_evaluation.rst","api/ballet.validation.project_structure.rst","api/modules.rst","authors.rst","contributing.rst","history.rst","index.rst","installation.rst","readme.rst","usage.rst"],objects:{"":{ballet:[0,0,0,"-"]},"ballet.contrib":{get_contrib_features:[2,1,1,""]},"ballet.eng":{base:[4,0,0,"-"],misc:[5,0,0,"-"],missing:[6,0,0,"-"],ts:[7,0,0,"-"]},"ballet.eng.base":{BaseTransformer:[4,2,1,""],GroupedFunctionTransformer:[4,2,1,""],NoFitMixin:[4,2,1,""],SimpleFunctionTransformer:[4,2,1,""]},"ballet.eng.base.GroupedFunctionTransformer":{transform:[4,3,1,""]},"ballet.eng.base.NoFitMixin":{fit:[4,3,1,""]},"ballet.eng.base.SimpleFunctionTransformer":{transform:[4,3,1,""]},"ballet.eng.misc":{BoxCoxTransformer:[5,2,1,""],IdentityTransformer:[5,2,1,""],NamedFramer:[5,2,1,""],ValueReplacer:[5,2,1,""]},"ballet.eng.misc.BoxCoxTransformer":{fit:[5,3,1,""],transform:[5,3,1,""]},"ballet.eng.misc.NamedFramer":{transform:[5,3,1,""]},"ballet.eng.misc.ValueReplacer":{transform:[5,3,1,""]},"ballet.eng.missing":{LagImputer:[6,2,1,""],NullFiller:[6,2,1,""],NullIndicator:[6,2,1,""]},"ballet.eng.missing.NullFiller":{transform:[6,3,1,""]},"ballet.eng.missing.NullIndicator":{transform:[6,3,1,""]},"ballet.eng.ts":{SingleLagger:[7,2,1,""],make_multi_lagger:[7,1,1,""]},"ballet.exc":{ConfigurationError:[8,4,1,""],Error:[8,4,1,""],FeatureRejected:[8,4,1,""],FeatureValidationError:[8,4,1,""],InvalidFeatureApi:[8,4,1,""],InvalidProjectStructure:[8,4,1,""],SkippedValidationTest:[8,4,1,""],UnexpectedTravisEnvironmentError:[8,4,1,""],UnsuccessfulInputConversionError:[8,4,1,""]},"ballet.feature":{Feature:[9,2,1,""],make_mapper:[9,1,1,""]},"ballet.feature.Feature":{as_dataframe_mapper:[9,3,1,""],as_input_transformer_tuple:[9,3,1,""]},"ballet.modeler":{DecisionTreeModeler:[10,2,1,""],Modeler:[10,2,1,""],SelfTuningMixin:[10,2,1,""],SelfTuningRandomForestMixin:[10,2,1,""],StratifiedKFoldMultiClassIndicator:[10,2,1,""],TunedModeler:[10,2,1,""],TunedRandomForestClassifier:[10,2,1,""],TunedRandomForestRegressor:[10,2,1,""]},"ballet.modeler.Modeler":{compute_metrics_cv:[10,3,1,""],compute_metrics_train_test:[10,3,1,""],cv_score_mean:[10,3,1,""],dump:[10,3,1,""],fit:[10,3,1,""],load:[10,3,1,""],predict:[10,3,1,""],predict_proba:[10,3,1,""],score:[10,3,1,""],set_estimator:[10,3,1,""]},"ballet.modeler.SelfTuningMixin":{fit:[10,3,1,""],get_tunables:[10,3,1,""],tunables:[10,5,1,""],tuning_cv:[10,5,1,""],tuning_iter:[10,5,1,""]},"ballet.modeler.SelfTuningRandomForestMixin":{get_tunables:[10,3,1,""]},"ballet.modeler.StratifiedKFoldMultiClassIndicator":{split:[10,3,1,""]},"ballet.modeling":{constants:[12,0,0,"-"],io_transformers:[13,0,0,"-"],problem:[14,0,0,"-"],scoring:[15,0,0,"-"]},"ballet.modeling.io_transformers":{FeatureTypeTransformer:[13,2,1,""],TargetTypeTransformer:[13,2,1,""]},"ballet.modeling.io_transformers.FeatureTypeTransformer":{BAD_SHAPE_MSG:[13,5,1,""],BAD_TYPE_MSG:[13,5,1,""],fit:[13,3,1,""],inverse_transform:[13,3,1,""],transform:[13,3,1,""]},"ballet.modeling.io_transformers.TargetTypeTransformer":{fit:[13,3,1,""],inverse_transform:[13,3,1,""],transform:[13,3,1,""]},"ballet.modeling.problem":{BinaryClassificationProblem:[14,2,1,""],ClassificationProblem:[14,2,1,""],MulticlassClassificationProblem:[14,2,1,""],ProblemType:[14,2,1,""],RegressionProblem:[14,2,1,""]},"ballet.modeling.problem.BinaryClassificationProblem":{binary_classification:[14,5,1,""]},"ballet.modeling.problem.ClassificationProblem":{classification:[14,5,1,""]},"ballet.modeling.problem.MulticlassClassificationProblem":{multi_classification:[14,5,1,""]},"ballet.modeling.problem.ProblemType":{binary_classification:[14,5,1,""],classification:[14,5,1,""],multi_classification:[14,5,1,""],regression:[14,5,1,""]},"ballet.modeling.problem.RegressionProblem":{regression:[14,5,1,""]},"ballet.modeling.scoring":{ScorerInfo:[15,2,1,""],get_scorer_names_for_problem_type:[15,1,1,""]},"ballet.modeling.scoring.ScorerInfo":{description:[15,5,1,""],name:[15,5,1,""],scorer:[15,5,1,""]},"ballet.project":{Project:[16,2,1,""],config_get:[16,1,1,""],find_configs:[16,1,1,""],get_config_paths:[16,1,1,""],make_config_get:[16,1,1,""],relative_to_contrib:[16,1,1,""]},"ballet.project.Project":{attr_map:[16,5,1,""],contrib_module_path:[16,5,1,""],on_pr:[16,3,1,""],path:[16,5,1,""],pr_num:[16,5,1,""],repo:[16,5,1,""]},"ballet.quickstart":{generate_project:[17,1,1,""],main:[17,1,1,""]},"ballet.util":{DeepcopyMixin:[18,2,1,""],asarray2d:[18,1,1,""],ci:[19,0,0,"-"],fs:[20,0,0,"-"],get_arr_desc:[18,1,1,""],get_enum_keys:[18,1,1,""],get_enum_values:[18,1,1,""],git:[21,0,0,"-"],has_nans:[18,1,1,""],indent:[18,1,1,""],io:[22,0,0,"-"],log:[23,0,0,"-"],make_plural_suffix:[18,1,1,""],mod:[24,0,0,"-"],testing:[25,0,0,"-"],whether_failures:[18,1,1,""]},"ballet.util.ci":{TravisPullRequestBuildDiffer:[19,2,1,""],can_use_travis_differ:[19,1,1,""],dump_travis_env_vars:[19,1,1,""],ensure_expected_travis_env_vars:[19,1,1,""],get_travis_env_or_fail:[19,1,1,""],get_travis_pr_num:[19,1,1,""],is_travis_pr:[19,1,1,""]},"ballet.util.ci.TravisPullRequestBuildDiffer":{EXPECTED_TRAVIS_ENV_VARS:[19,5,1,""]},"ballet.util.fs":{isemptyfile:[20,1,1,""],replaceext:[20,1,1,""],spliceext:[20,1,1,""],splitext2:[20,1,1,""]},"ballet.util.git":{HeadInfo:[21,2,1,""],LocalPullRequestBuildDiffer:[21,2,1,""],PullRequestBuildDiffer:[21,2,1,""],PullRequestInfo:[21,2,1,""],get_diff_str_from_commits:[21,1,1,""],get_diffs_by_diff_str:[21,1,1,""],get_diffs_by_revision:[21,1,1,""],get_pr_num:[21,1,1,""],set_config_variables:[21,1,1,""],switch_to_new_branch:[21,1,1,""]},"ballet.util.git.HeadInfo":{path:[21,5,1,""]},"ballet.util.git.PullRequestBuildDiffer":{diff:[21,3,1,""]},"ballet.util.git.PullRequestInfo":{local_ref_name:[21,5,1,""],local_rev_name:[21,5,1,""],remote_ref_name:[21,5,1,""]},"ballet.util.io":{read_tabular:[22,1,1,""],write_tabular:[22,1,1,""]},"ballet.util.log":{LoggingContext:[23,2,1,""],enable:[23,1,1,""],stacklog:[23,2,1,""]},"ballet.util.mod":{import_module_at_path:[24,1,1,""],import_module_from_modname:[24,1,1,""],import_module_from_relpath:[24,1,1,""],modname_to_relpath:[24,1,1,""],relpath_to_modname:[24,1,1,""]},"ballet.util.testing":{ArrayLikeEqualityTestingMixin:[25,2,1,""],log_seed_on_error:[25,1,1,""],seeded:[25,1,1,""]},"ballet.util.testing.ArrayLikeEqualityTestingMixin":{assertArrayAlmostEqual:[25,3,1,""],assertArrayEqual:[25,3,1,""],assertArrayNotAlmostEqual:[25,3,1,""],assertArrayNotEqual:[25,3,1,""],assertFrameEqual:[25,3,1,""],assertFrameNotEqual:[25,3,1,""],assertIndexEqual:[25,3,1,""],assertIndexNotEqual:[25,3,1,""],assertPandasObjectEqual:[25,3,1,""],assertPandasObjectNotEqual:[25,3,1,""],assertSeriesEqual:[25,3,1,""],assertSeriesNotEqual:[25,3,1,""]},"ballet.validation":{BalletTestTypes:[26,2,1,""],base:[27,0,0,"-"],check_project_structure:[26,1,1,""],detect_target_type:[26,1,1,""],diff_checks:[28,0,0,"-"],evaluate_feature_performance:[26,1,1,""],feature_api_checks:[29,0,0,"-"],feature_evaluation:[30,0,0,"-"],get_proposed_feature:[26,1,1,""],log_validation_stage:[26,1,1,""],main:[26,1,1,""],project_structure:[31,0,0,"-"],prune_existing_features:[26,1,1,""],validate_feature_api:[26,1,1,""]},"ballet.validation.BalletTestTypes":{FEATURE_ACCEPTANCE_EVALUTION:[26,5,1,""],FEATURE_API_VALIDATION:[26,5,1,""],FEATURE_PRUNING_EVALUATION:[26,5,1,""],PROJECT_STRUCTURE_VALIDATION:[26,5,1,""]},"ballet.validation.base":{BaseCheck:[27,2,1,""],BaseValidator:[27,2,1,""],FeatureAcceptanceEvaluator:[27,2,1,""],FeaturePerformanceEvaluator:[27,2,1,""],FeaturePruningEvaluator:[27,2,1,""],check_from_class:[27,1,1,""]},"ballet.validation.base.BaseCheck":{check:[27,3,1,""],do_check:[27,3,1,""]},"ballet.validation.base.BaseValidator":{validate:[27,3,1,""]},"ballet.validation.base.FeatureAcceptanceEvaluator":{judge:[27,3,1,""]},"ballet.validation.base.FeaturePruningEvaluator":{prune:[27,3,1,""]},"ballet.validation.diff_checks":{DiffCheck:[28,2,1,""],IfInitModuleThenIsEmptyCheck:[28,2,1,""],IsAdditionCheck:[28,2,1,""],IsPythonSourceCheck:[28,2,1,""],ModuleNameCheck:[28,2,1,""],RelativeNameDepthCheck:[28,2,1,""],SubpackageNameCheck:[28,2,1,""],WithinContribCheck:[28,2,1,""]},"ballet.validation.diff_checks.IfInitModuleThenIsEmptyCheck":{check:[28,3,1,""]},"ballet.validation.diff_checks.IsAdditionCheck":{check:[28,3,1,""]},"ballet.validation.diff_checks.IsPythonSourceCheck":{check:[28,3,1,""]},"ballet.validation.diff_checks.ModuleNameCheck":{check:[28,3,1,""]},"ballet.validation.diff_checks.RelativeNameDepthCheck":{check:[28,3,1,""]},"ballet.validation.diff_checks.SubpackageNameCheck":{check:[28,3,1,""]},"ballet.validation.diff_checks.WithinContribCheck":{check:[28,3,1,""]},"ballet.validation.feature_api_checks":{CanDeepcopyCheck:[29,2,1,""],CanFitCheck:[29,2,1,""],CanFitTransformCheck:[29,2,1,""],CanMakeMapperCheck:[29,2,1,""],CanTransformCheck:[29,2,1,""],FeatureApiCheck:[29,2,1,""],HasCorrectInputTypeCheck:[29,2,1,""],HasCorrectOutputDimensionsCheck:[29,2,1,""],HasTransformerInterfaceCheck:[29,2,1,""],IsFeatureCheck:[29,2,1,""],NoInfiniteValuesCheck:[29,2,1,""],NoMissingValuesCheck:[29,2,1,""]},"ballet.validation.feature_api_checks.CanDeepcopyCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.CanFitCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.CanFitTransformCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.CanMakeMapperCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.CanTransformCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.HasCorrectInputTypeCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.HasCorrectOutputDimensionsCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.HasTransformerInterfaceCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.IsFeatureCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.NoInfiniteValuesCheck":{check:[29,3,1,""]},"ballet.validation.feature_api_checks.NoMissingValuesCheck":{check:[29,3,1,""]},"ballet.validation.feature_evaluation":{FeatureRedundancyEvaluator:[30,2,1,""],FeatureRelevanceEvaluator:[30,2,1,""]},"ballet.validation.feature_evaluation.FeatureRedundancyEvaluator":{prune:[30,3,1,""]},"ballet.validation.feature_evaluation.FeatureRelevanceEvaluator":{judge:[30,3,1,""]},"ballet.validation.project_structure":{ChangeCollector:[31,2,1,""],CollectedChanges:[31,2,1,""],FeatureApiValidator:[31,2,1,""],FileChangeValidator:[31,2,1,""],subsample_data_for_validation:[31,1,1,""]},"ballet.validation.project_structure.ChangeCollector":{collect_changes:[31,3,1,""]},"ballet.validation.project_structure.CollectedChanges":{candidate_feature_diffs:[31,5,1,""],file_diffs:[31,5,1,""],inadmissible_diffs:[31,5,1,""],new_feature_info:[31,5,1,""],valid_init_diffs:[31,5,1,""]},"ballet.validation.project_structure.FeatureApiValidator":{validate:[31,3,1,""]},"ballet.validation.project_structure.FileChangeValidator":{validate:[31,3,1,""]},ballet:{compat:[1,0,0,"-"],contrib:[2,0,0,"-"],eng:[3,0,0,"-"],exc:[8,0,0,"-"],feature:[9,0,0,"-"],modeler:[10,0,0,"-"],modeling:[11,0,0,"-"],project:[16,0,0,"-"],quickstart:[17,0,0,"-"],util:[18,0,0,"-"],validation:[26,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:exception","5":"py:attribute"},terms:{"95a70e9":39,"case":[9,16,24],"catch":23,"class":[4,5,6,7,9,10,13,14,15,16,18,19,21,23,25,26,27,28,29,30,31],"default":[5,6,16,19,24,25],"final":10,"float":[5,25],"function":[9,15,16,23,34,36,38,39],"import":[2,16,24,39],"int":[7,19,21,25,31],"long":23,"new":[4,20,28,29,31,34,36,38],"null":6,"public":37,"return":[2,7,9,10,15,16,18,19,20,21,27,30,31],"true":[10,14,23,24],"try":39,"var":19,For:[2,21,29],The:[2,4,8,10,24,28,34,37,39],Then:[10,34],There:25,__file__:16,__init__:[16,24,28,39],_split:10,_util:24,abcdef90:21,about:[34,39],abov:5,absolut:[5,24],accept:[27,30],access:16,accord:17,accuraci:[16,39],across:10,activ:[36,38],actual:10,adapt:10,add:[20,24,34,35],add_init:24,added:20,addit:[4,16,28],adher:[36,38],admiss:31,after:27,against:21,algorithm:[36,38],alia:31,all:[16,18,25,31,34,36,38],allow:25,almost:25,alongsid:[36,38],alreadi:24,alwai:[10,34,37],ani:[16,18,20,34,36,38],anyth:34,api:[8,28,29,35,36,38],appli:[4,5,7,18],appreci:34,approxim:25,arbitrari:[25,39],arg:[10,23],argument:[4,7],arr:18,arrai:[10,18,22,25,29],arraylikeequalitytestingmixin:[25,35],articl:34,as_dataframe_mapp:9,as_input_transformer_tupl:9,asarray2d:18,assertarrayalmostequ:25,assertarrayequ:25,assertarraynotalmostequ:25,assertarraynotequ:25,assertframeequ:25,assertframenotequ:25,assertindexequ:25,assertindexnotequ:25,assertpandasobjectequ:25,assertpandasobjectnotequ:25,assertseriesequ:25,assertseriesnotequ:25,assum:34,attr_map:16,attribut:[5,16],auto:10,automat:39,averag:10,average_precis:39,axes:18,bad_shape_msg:13,bad_type_msg:13,balanced_accuraci:39,ballet:[34,35,37],ballet_project:39,ballettesttyp:26,bar:[20,24],base:[0,3,5,6,7,8,9,10,13,14,15,16,18,19,21,23,25,26,28,29,30,31],basecheck:[27,28,29],baseestim:[4,13],baseexcept:8,basetransform:[4,5,6],basevalid:[27,31],basic:39,baz:24,becaus:24,been:39,befor:[20,34,39],behavior:18,best:34,between:[21,25],binari:39,binary_classif:14,binaryclassificationproblem:14,bit:34,block:[36,38],blog:34,bool:[20,24,27,30,31],bootstrap:10,both:20,box:5,boxcox1p:5,boxcoxtransform:5,branch:[31,34],brier_score_loss:39,bug:[36,38],bugfix:34,build:[16,19,36,38],built:[36,38],bumpvers:34,call:[4,10,18,26,29,39],callabl:[4,6,23],can:[9,10,15,16,28,29,34,36,37,38,39],can_use_travis_diff:19,candeepcopycheck:29,candid:[8,16],candidate_feature_diff:31,canfitcheck:29,canfittransformcheck:29,canmakemappercheck:29,cantransformcheck:29,cast:18,categor:[9,31],chang:[8,16,21,31,34,35,39],changecollector:31,check:[5,18,19,27,28,29,34,35,36,38],check_class:27,check_from_class:27,check_project_structur:26,checker_arg:27,checker_kwarg:27,checkout:34,choos:39,chosen:39,claim:24,class_weight:10,classif:[10,14,39],classification_scor:39,classification_typ:39,classificationproblem:14,clone:[34,37],close:23,cls:18,code:[25,36,38,39],collabor:[36,38,39],collect:[2,7,9,18,31],collect_chang:31,collectedchang:31,column:[5,9,39],com:[19,21,34,36,37,38,39],command:[17,35,36,37,38,39],commit:[21,34,39],compar:[21,25,31],comparison:[21,25,31],compat:[0,10,18,32,36,38],complet:15,comput:[10,16],compute_metrics_cv:10,compute_metrics_train_test:10,conceptu:9,condit:[23,30],condition:[5,30],conf:[16,39],config:[16,21],config_get:16,configur:[8,16,39],configurationerror:[8,16],consid:6,consol:23,constant:[0,11],constructor:9,contain:[16,39],context:23,continu:39,contrib:[0,16,28,31,32,39],contrib_module_path:[16,31],contribut:[2,31,39],contributor:[36,38,39],control:25,convers:[8,24],convert:[5,24,29],cookbook:23,cookiecutt:[17,39],copi:[34,37],correct:29,correl:30,correspond:16,could:34,cox:5,creat:[16,34,39],credit:34,criterion:10,cross:10,curl:37,current:19,cv_score_mean:10,data:[9,10,29,36,38,39],datafram:[4,5,7,9,10,22,25],dataframemapp:[9,29],dataset:[36,38,39],decisiontreemodel:10,deepcopi:29,deepcopymixin:18,defin:[9,15,16,39],delegatingrobusttransform:[36,38],delta:25,depend:39,depth:28,describ:39,descript:[9,15,18,34],detail:[21,34,39],detect:24,detect_target_typ:26,determin:[5,20],develop:[4,34,36,38],dict:[4,7,9,10,21],dictionari:10,diff:[16,21,28],diff_check:[0,26],diff_str:21,diffcheck:28,differ:[7,10,18,19],dimens:29,dir:16,directori:[16,24,39],do_check:27,doc:[5,19,20,23,34],docstr:34,document:[36,38],doe:[16,18],doing:10,don:37,done:[10,23,34],dot:20,download:[37,39],driven:34,driver:[35,39],dump:10,dump_travis_env_var:19,each:[2,4,5,6,7,9,10,18],easi:16,easier:34,echo:23,edu:33,either:[9,28,37],element:25,els:25,email:[21,39],embed:9,empti:[28,39],enabl:[23,25],encapsul:16,encod:9,end:[21,22,36,38],eng:[0,32,36,38,39],engin:[36,38,39],enhanc:34,ensembl:10,ensure_expected_travis_env_var:19,entri:[17,21,34],env:19,environ:[8,19],equal:[5,25,30],error:[8,23,25],estim:10,evalu:[27,35,39],evaluate_feature_perform:26,even:34,eventu:4,everi:34,exampl:[16,20,21,23,24,39],exc:[0,32],except:[8,23],execut:[8,29],exist:[10,16,20,27,30,36,38],expand:[36,38],expected_travis_env_var:19,explain:34,explained_vari:39,ext:20,extens:[20,36,38],extern:39,f1_macro:39,f1_micro:39,f1_sampl:39,f1_weight:39,fail:24,failur:[18,23],fals:[10,13,14],feat:[36,38],featur:[0,2,8,10,16,24,27,28,29,30,31,32,35,36,38],feature_:[28,39],feature_acceptance_evalu:26,feature_acceptance_evalut:26,feature_api_check:[0,26],feature_api_valid:26,feature_evalu:[0,26],feature_pruning_evalu:26,featureacceptanceevalu:[27,30],featureapicheck:29,featureapivalid:31,featureperformanceevalu:27,featurepruningevalu:[27,30],featureredundancyevalu:30,featurereject:8,featurerelevanceevalu:30,featuretypetransform:13,featurevalidationerror:8,field:31,file:[9,16,20,21,24,28,31,34,39],file_diff:31,filechangevalid:31,filenam:20,filepath:[10,20,22],fill:6,filter:6,find:16,find_config:16,finit:29,first:[25,33,35,39],fit:[4,5,9,10,13,29],fit_arg:5,fit_kwarg:[4,10,13],fit_tranform:29,fit_transform:29,flake8:34,fold:10,follow:[16,36,38],foo:[2,16,20,24,39],forest:10,fork:[34,39],form:[18,21,24],format:[10,22],found:16,framework:[36,38,39],free:[36,38],from:[9,16,21,24,27,30,31,39],from_revis:21,full:21,full_nam:39,func:4,func_arg:4,func_kwarg:4,functiontransform:4,gener:[5,10,17,27,36,38,39],generate_project:17,get:[2,15,16,18,21],get_arr_desc:18,get_config_path:16,get_contrib_featur:[2,16,35],get_diff_str_from_commit:21,get_diffs_by_diff_str:21,get_diffs_by_revis:21,get_enum_kei:18,get_enum_valu:18,get_pr_num:21,get_proposed_featur:26,get_scorer_names_for_problem_typ:15,get_travis_env_or_fail:19,get_travis_pr_num:19,get_tun:10,gini:10,git:[0,16,18,19,31,34,35,37,39],github:[21,34,36,37,38,39],github_usernam:39,gitignor:39,given:[5,6,34,36,38],greatli:34,group:[4,6,7,10],groupbi:[4,7],groupby_kwarg:[4,6,7],groupedfunctiontransform:[4,6,7],guid:37,had:8,handl:10,handler:23,has:[16,18,28,29,39],has_nan:18,hascorrectinputtypecheck:29,hascorrectoutputdimensionscheck:29,hastransformerinterfacecheck:29,have:[5,31,34,37,39],hdf5:22,hdi:[34,36,37,38],head:21,headinfo:21,help:[21,34],henc:10,here:34,histori:34,home:24,homepag:[36,38],hot:9,hous:39,how:[34,39],howto:23,html:[5,23],http:[5,19,23,34,36,37,38],hypothet:39,ident:10,identifi:[21,24],identitytransform:[5,39],ifinitmodulethenisemptycheck:28,ignor:10,implement:[23,28,29,35,39],import_module_at_path:24,import_module_from_modnam:24,import_module_from_relpath:24,inadmiss:31,inadmissible_diff:31,includ:[16,20,34],inclus:39,indent:18,independ:30,index:[25,36],indic:[6,10],info:23,inform:[15,16,39],initi:[21,39],input:[4,5,8,9,10,13,29,39],insert:39,instal:34,instanc:[2,5,9,16,29,39],instead:10,integ:10,integr:39,interfac:29,introduc:[8,28,31],invalid:8,invalidfeatureapi:8,invalidprojectstructur:8,invari:[36,38],inverse_transform:13,inverse_transform_kwarg:13,io_transform:[0,11],is_travis_pr:19,isadditioncheck:28,isempti:20,isemptyfil:20,isfeaturecheck:29,isnan:[6,18],isnul:6,ispythonsourcecheck:28,issu:34,iter:29,its:[4,5,16,27],itself:24,jane:39,jane_develop:39,job:19,judg:[27,30],just:[15,34],keep:34,kei:10,keyword:[4,7],kwarg:[10,17,23,25],label:10,lag:[6,7],lagimput:6,lead:20,learn:[9,10,36,38],less:30,let:[30,39],level:[0,23],leverag:39,librari:[36,38],licens:[36,38],light:[36,38],like:[2,9,10,16,22,25,29,39],line:[17,18],list:[2,9,10,15,16,21,23,27,30,34],list_of_failur:18,littl:34,lmbda:5,load:10,load_data:[16,39],local:[21,34],local_ref_nam:21,local_rev_nam:21,localpullrequestbuilddiff:21,locat:[24,39],log:[0,18],log_seed_on_error:25,log_validation_stag:26,logger:[23,25],loggingcontext:23,logic:[9,29,36,38],look:34,made:9,mai:[10,24],main:[17,26],maintain:[34,36,38,39],major:34,make:[9,10,34,37],make_config_get:16,make_mapp:9,make_multi_lagg:7,make_plural_suffix:18,manag:23,mani:[25,34],map:[9,10],mapper:9,master:[21,37,39],match:28,matrix:30,max_depth:10,max_featur:10,max_leaf_nod:10,mean:10,meet:34,merg:39,messag:[23,26],metadata:[36,38],method:[16,23,37],metric:[10,15],micah:33,might:34,min_impurity_decreas:10,min_impurity_split:10,min_samples_leaf:10,min_samples_split:10,min_weight_fraction_leaf:10,minor:34,misc:[0,3,39],miss:[0,3,29],mit:[33,36,38],mix:[4,25],mkvirtualenv:34,mod:[0,18],mode:39,model:[0,32,35,36,38],model_select:10,modnam:24,modname_to_relpath:24,modpath:24,modul:[0,3,11,18,26,32,35,36,39],modulenamecheck:28,moduletyp:16,modutil:35,more:[15,34],most:[37,39],mostli:16,mse:10,msg:25,multi:35,multi_classif:14,multiclass:[10,39],multiclassclassificationproblem:14,multilabel:10,must:[22,24,28,39],n_estim:10,n_featur:10,n_job:10,n_sampl:10,name:[5,9,10,15,19,21,24,28,34,35,39],namedfram:5,nan:18,narrow:34,ndarrai:10,need:[9,15,24,29],needs_label_binar:13,neg_log_loss:39,neg_mean_absolute_error:39,neg_mean_squared_error:39,neg_mean_squared_log_error:39,neg_median_absolute_error:39,new_ext:20,new_feature_info:31,new_fil:28,nofitmixin:4,noinfinitevaluescheck:29,nomissingvaluescheck:29,non:29,none:[4,5,6,7,9,10,15,16,19,21,23,24,25,26,33],noqa:23,note:[10,39],notimplementederror:23,now:[34,39],nullfil:6,nullind:6,number:[10,16,19,21,29,31],obj:[18,22,27],object:[2,4,5,9,10,14,15,16,18,21,22,23,25,26,27,29,31,36,38,39],offici:34,on_pr:16,onc:37,one:[9,16,20],oob_scor:10,open:34,oper:[7,34],option:[4,9,16,17],order:9,org:[5,23,34,39],origin:34,other:34,otherwis:19,out:39,output:[9,23,29],over:18,overal:29,packag:[16,24,28,32,39],package_root:16,page:36,panda:25,paramet:[2,4,5,6,7,9,10,16,17,20,21,22,23,24,25,28,29,31],parent:16,part:34,pass:[4,5,6,9,34,39],patch:34,path:[2,9,16,20,21,22,24,31],pca:9,perform:[10,27,36,38],pickl:22,pip:[34,37],pipelin:[8,29,36,38,39],pkl:22,place:25,placehold:10,pleas:[34,36,38],point:[17,21,27,36,38],possibl:34,post:34,power:5,pr_num:[16,19,21,31],pre:39,precis:39,precision_macro:39,precision_micro:39,precision_sampl:39,precision_weight:39,predict:[10,36,38,39],predict_house_pric:39,predict_proba:10,prefer:37,preprocess:4,present:[2,24],previous:5,price:39,prj:16,problem:[0,10,11,15,16,39],problem_typ:[10,15,39],problem_type_detail:16,problemtyp:[10,14],process:37,produc:[9,23,29],project:[0,2,8,17,21,24,26,27,28,31,32,34,35,36,37,38],project_nam:39,project_root:[2,24],project_slug:39,project_structur:[0,26],project_structure_valid:26,prone:23,proper:28,properti:16,propos:[31,34,36,38,39],provid:[9,10,25,36,38],prune:[27,30],prune_existing_featur:26,pull:[19,21,31,39],pull_request:34,pullrequestbuilddiff:[19,21],pullrequestfeaturevalid:35,pullrequestinfo:21,push:34,put:34,py34:18,py35:18,pypi:[34,35],python:[16,23,28,31,34,37,39],quickstart:[0,32,35,36,38,39],rais:[16,23],random:10,random_st:10,randomforestclassifi:10,randomforestregressor:10,rang:21,raw:9,read:22,read_tabular:22,readi:34,readm:[34,39],recal:39,recall_macro:39,recall_micro:39,recall_sampl:39,recall_weight:39,receiv:39,recent:37,redund:30,ref:21,refer:[5,16,29,39],regress:[10,14,39],regression_scor:39,regressionproblem:14,regular:24,reject:[8,27],rel:[16,24,31],relative_to_contrib:16,relativenamedepthcheck:28,releas:35,relev:24,relpath:24,relpath_to_modnam:24,rememb:34,remind:34,remot:21,remote_ref_nam:21,remov:[27,30],render:39,replac:[4,5,6,20],replaceext:20,repo:[16,19,21,31,34,37],report:[25,36,38],repositori:[36,37,38,39],repres:[16,28],reproduc:34,request:[19,21,31,39],requir:[4,9,19,39],restor:25,result:[2,5,10,39],revis:21,rng:25,robust:[36,38],roc_auc:39,root:[2,16,20,21,23,24,39],routin:[8,35],run:[23,25,34,36,37,38,39],run_long_funct:23,sampl:10,scalar:9,scienc:[36,38],scipi:5,scope:34,score:[0,10,11],scorer:[10,15,16,39],scorer_nam:15,scorerinfo:15,scoring_nam:10,script:39,search:36,second:25,section:[16,39],see:[16,21,39],seed:25,select:[5,23,36,38,39],selftuningmixin:10,selftuningrandomforestmixin:10,send:34,sequenc:[9,16],seri:[10,25],servic:39,set:[10,19,21,25,30,34],set_config_vari:21,set_estim:10,setup:34,shape:[10,13,18],shorthand:21,should:[10,16,24,27,29,30,34],simpl:[5,23],simplefunctiontransform:[4,5],singl:[2,39],singlelagg:7,size:30,skew:5,skip:[8,23,39],skippedvalidationtest:8,sklearn:[4,10,13,15],sklearn_panda:[36,38],smith:33,softwar:[36,38],sole:31,solv:39,some:[5,24,30],someth:[27,31],sometim:18,sourc:[2,4,5,6,7,8,9,10,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,36,38,39],space:18,special:5,specif:[6,16,39],specifi:[21,24],splice:20,spliceext:20,split:[10,20],splitext2:20,splitter:10,stack:23,stacklog:23,stage:[4,5,35],standalon:9,start:21,state:25,step:[31,34],store:[25,36,38],str:[2,9,10,16,20,21,24,29,31],stratif:10,stratifiedkfold:10,stratifiedkfoldmulticlassind:10,stream:[36,38],string:[20,21],structur:[8,35,36,38],style:9,subdirectori:[24,28,31],submiss:[36,38],submodul:[32,39],subpackag:[2,28,32,39],subpackagenamecheck:28,subsample_data_for_valid:31,subset:[30,34],succeed:[27,31],success:[5,18],successfulli:39,suffici:10,suffix:18,suit:[36,38,39],supervis:10,suppli:39,support:34,sure:34,switch_to_new_branch:21,sys:24,system:[24,34],tabular:22,tag:34,tarbal:37,target:[10,30],targettypetransform:13,techniqu:9,templat:[17,35,39],termin:37,test:[0,5,6,8,10,18,34],test_ballet:34,test_target_typ:26,text:18,than:30,thei:[24,34,39],them:34,thi:[4,9,10,15,16,21,23,25,29,31,34,37,39],threshold:5,through:[5,16,34,36,37,38,39],tmp:39,to_revis:21,toler:25,tool:17,top:0,tox:34,train:[10,39],tranform_kwarg:6,transform:[4,5,6,7,9,10,13,29,36,38,39],transform_arg:5,transform_kwarg:[4,5,6,13],transformermixin:[4,13],travi:[8,19,34,35,39],travis_build_dir:19,travis_commit_rang:19,travis_pull_request:19,travispullrequestbuilddiff:19,tree:16,trigger:39,troubleshoot:34,tunabl:10,tune:10,tunedmodel:10,tunedrandomforestclassifi:10,tunedrandomforestregressor:10,tuning_cv:10,tuning_it:10,tupl:[4,9,20,23,31],two:[21,25],txt:[20,39],type:[2,8,9,10,13,15,18,27,30,31,39],ultim:39,under:[36,38,39],underli:16,unexpect:8,unexpectedtravisenvironmenterror:8,union:[7,9,10],uniqu:24,unit:25,unmodifi:39,unsuccess:8,unsuccessfulinputconversionerror:8,unsupport:13,updat:34,ure:[36,38],usag:[16,23],use:[34,39],used:[10,15,36,38,39],useful:16,user:[19,21,24,39],user_:[28,39],user_exampl:28,usernam:39,uses:[36,38,39],using:[6,23,25,39],usual:[16,24],util:[0,15,16,32,35],valid:[0,8,10,16,32,35,36,38],valid_init_diff:31,validate_feature_api:26,valu:[5,6,9,10,16,25,29],valuereplac:5,variabl:[5,9,10,15,19,21],varieti:10,vector:[6,9],verbos:10,versatil:[10,35,36,38],version:34,via:21,view:27,virtualenv:34,virtualenvwrapp:34,volunt:34,wai:[25,34],walk:2,want:[34,39],warm_start:10,warn:[10,23],web:34,websit:34,weight:[36,38],welcom:34,well:[16,36,38],were:16,what:39,when:34,where:[10,15,16,29],whether:[6,16,24,27,30,34],whether_failur:18,which:[5,9,18,24,39],whoever:34,why:33,wise:25,within:[2,8,16,24,28,36,38,39],withincontribcheck:28,work:34,would:[24,34],write:[22,39],write_tabular:22,x_df:[27,30],yet:33,yield:10,yml:[16,39],you:[10,21,34,37,39],your:[34,37,39],your_name_her:34,zero:10},titles:["ballet package","ballet.compat module","ballet.contrib module","ballet.eng package","ballet.eng.base module","ballet.eng.misc module","ballet.eng.missing module","ballet.eng.ts module","ballet.exc module","ballet.feature module","ballet.modeler module","ballet.modeling package","ballet.modeling.constants module","ballet.modeling.io_transformers module","ballet.modeling.problem module","ballet.modeling.scoring module","ballet.project module","ballet.quickstart module","ballet.util package","ballet.util.ci module","ballet.util.fs module","ballet.util.git module","ballet.util.io module","ballet.util.log module","ballet.util.mod module","ballet.util.testing module","ballet.validation package","ballet.validation.base module","ballet.validation.diff_checks module","ballet.validation.feature_api_checks module","ballet.validation.feature_evaluation module","ballet.validation.project_structure module","ballet","Credits","Contributing","History","ballet","Installation","ballet","Usage"],titleterms:{"new":39,ballet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,36,38,39],base:[4,27],bug:34,compat:1,constant:12,contrib:2,contribut:34,contributor:33,credit:33,deploi:34,develop:[33,39],diff_check:28,document:34,eng:[3,4,5,6,7],exc:8,featur:[9,34,39],feature_api_check:29,feature_evalu:30,feedback:34,fix:34,from:37,get:34,git:21,guidelin:34,histori:35,implement:34,indic:36,instal:37,instanti:39,io_transform:13,lead:33,log:23,misc:5,miss:6,mod:24,model:[10,11,12,13,14,15],modul:[1,2,4,5,6,7,8,9,10,12,13,14,15,16,17,19,20,21,22,23,24,25,27,28,29,30,31],packag:[0,3,11,18,26],problem:14,project:[16,39],project_structur:31,pull:34,quickstart:17,releas:37,report:34,request:34,score:15,sourc:37,stabl:37,start:34,submit:34,submodul:[0,3,11,18,26],subpackag:0,tabl:36,test:25,tip:34,type:34,usag:39,util:[18,19,20,21,22,23,24,25],valid:[26,27,28,29,30,31,39],write:34}})