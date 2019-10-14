import { project, savings } from './objects';
import logicUtils from './logic_utils';

const createProject = (() => {
  const setDefaultProject = () => {
    if (!window.localStorage.getItem('project')
     || JSON.parse(window.localStorage.getItem('project')).length === 0) {
      const defaultProject = [
        { projectName: 'default project with long name', id: 'project-1' },
      ];
      logicUtils.updateJsonInfoToStorage({ sort: 'project', data: defaultProject });
      logicUtils.addJsonInfoToStorage({
        sort: 'ids',
        data: {
          projectLastId: defaultProject[0].id,
          projectCurrentId: defaultProject[0].id,
        },
      });
    }
  };

  const addProjectList = ({ projectName, id }) => {
    const copyProjectId = id || logicUtils.getNewId('project');
    savings.projectList.push(project({ projectName, id: copyProjectId }));
    window.localStorage.setItem('project', JSON.stringify(savings.projectList));
  };

  const setInfoFromStorage = () => {
    const val = logicUtils.getJsonInfoFromStorage('project');
    if (val) savings.projectList = val;
  };

  return {
    addProjectList, setInfoFromStorage, setDefaultProject,
  };
})();

export default createProject;
