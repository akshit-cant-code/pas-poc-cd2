import _ from "lodash";

/**
 * Static class that provides static class methods to perform object transforms.
 * By default it provide wrapper over utility methods provided by lodash library
 * (https://lodash.com).
 *
 * @example
 * import { Transform } from './utils';
 *
 * Transform.serialize({ camel_case: "someValue" }); // { camelCase: "someValue" }
 * Transform.deserialize({ camelCase: "someValue" }); // { camel_case: "someValue" }
 */
class Transform {
  /**
   * Serialize an object keys in to camelCase.
   *
   * eg -
   * Transform.serialize({ camel_case: "someValue" }); // { camelCase: "someValue" }
   *
   * @param  {Object} record - Object to be transformed
   */
  static serialize = (record) => {
    return Transform.transform(record, _.camelCase);
  };

  /**
   * Deserialize an object keys in to snakeCases.
   *
   * eg -
   * Transform.deserialize({ camelCase: "someValue" }); // { camel_case: "someValue" }

   * @param  {Object} record - Object to be transformed
   */
  static deserialize = (record) => {
    return Transform.transform(record, _.snakeCase);
  };

  /**
   * This method allows you to transform object keys as per applied transform method.
   *
   * eg -
   * Transform.transform({ camelCase: "someValue" }, _.snakeCase); // { camel_case: "someValue" }
   */
  /**
   * @param  {Object} record - Object to be transformed
   * @param  {Function} transformMethod - Transform method that will be applied to object keys
   */
  static transform = (record, transformMethod) => {
    let transformedRecord = record;

    if (Array.isArray(record)) {
      transformedRecord = record.map((v) =>
        Transform.transform(v, transformMethod)
      );
    }

    if (
      record !== null &&
      record !== undefined &&
      record.constructor === Object
    ) {
      transformedRecord = Object.keys(record).reduce(
        (result, key) => ({
          ...result,
          [transformMethod(key)]: Transform.transform(
            record[key],
            transformMethod
          ),
        }),
        {}
      );
    }

    return transformedRecord;
  };
}

/**
 * TransformUtil class is exported.
 *
 * Only static class members will be accessible from this utility class to ensure
 * only atomic operation can be performed.
 */
export default Transform;
