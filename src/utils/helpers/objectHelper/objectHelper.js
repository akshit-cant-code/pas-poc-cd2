import _ from 'lodash';

class ObjectHelper {
  static isEmpty = (obj) => _.isEmpty(obj);

  static cloneDeep = (obj) => _.cloneDeep(obj);

  static isEqual = (obj1, obj2) => _.isEqual(obj1, obj2);
}

export default ObjectHelper;
