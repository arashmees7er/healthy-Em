import Vuex from 'vuex';
import app from './modules/app';
// import user from './modules/user';
// import translate from './modules/translate';
// import permissions from './modules/permissions'
import getters from './getters';
// import createMutationsSharer from '@/plugins/vuex-shared-mutations';
// import { permissions } from 'talentcloud-library';
// import workflow from './modules/workflow';

// import overtimeProfile from './modules/overtimeProfile';

// const predicate = ['SET_APP_ACTIVE_ID'];

const createStore = () => {
  return new Vuex.Store({
    // plugins: [
    //   createMutationsSharer({
    //     predicate: predicate,
    //   }),
    // ],
    modules: {
      app,
    //   user,
    //   workflow,
    //   translate,
    //   permissions,
    //   overtimeProfile,
    },
    getters,
  });
};

export default createStore;
