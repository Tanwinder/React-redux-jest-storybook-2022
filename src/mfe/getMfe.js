import { DynamicRemoteContainer } from '../components/mrv-mfe-utils/dynamicContainer';
import { RemoteComponent } from '../components/non-mfe-dynamic';
import { getItemKeywordSearchMFEUrl } from './urls';

// export const IKSMFEInitialLoad = () => (
//   <DynamicRemoteContainer
//     url={getItemKeywordSearchMFEUrl()}
//     scope="ItemKeywordSearch"
//     module="ItemSearchUIWithStore"
//     loader="Please wait while Loading... "
//     initialLoadForLazyLoading
//     mfeName="item-lookup"
//   />
// );

export const LazyLoadIKS = (props) => {
  return (
    <DynamicRemoteContainer
      url={getItemKeywordSearchMFEUrl()}
      scope="ItemKeywordSearch"
      module="ItemSearchUIWithStore"
      loader="Please wait while Loading... "
      // ErrorComponent={() => (
      //   // <MfeErrorBoundary
      //   //   handleBackClick={props.onBackButtonClick}
      //   //   errorMsg={IKS_MFE_DOWN_ERROR}
      //   // />
      // )}
      compProps={{ featureConf: {}, ...props }}
    />
  );
};

export const NonMfeLazy = (props) => (
  <RemoteComponent
    url={getItemKeywordSearchMFEUrl()}
    remote="ItemKeywordSearch"
    module="ItemSearchUIWithStore"
    loader="Please wait while Loading... "
    // ErrorComponent={() => (
    //   // <MfeErrorBoundary
    //   //   handleBackClick={props.onBackButtonClick}
    //   //   errorMsg={IKS_MFE_DOWN_ERROR}
    //   // />
    // )}
    compProps={{ featureConf: {}, ...props }}
  />
);
