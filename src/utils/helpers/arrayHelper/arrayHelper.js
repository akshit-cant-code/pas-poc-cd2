import _ from 'lodash';

class ArrayHelper {
  static isArray = (array) => _.isArray(array);

  static merge = (array1, array2) => _.merge(array1, array2);

  static uniq = (array) => _.uniq(array);

  static arrayToConjunctionString = (array) => {
    if (array.length === 1) return array[0];

    const firstElement = array.slice(0, array.length - 1);

    const lastElement = array[array.length - 1];

    return `${firstElement.join(', ')} and ${lastElement}`;
  };
}

export default ArrayHelper;
