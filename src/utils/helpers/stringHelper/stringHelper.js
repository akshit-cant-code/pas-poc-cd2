import s from 'underscore.string';
import pluralize from 'pluralize';

class StringHelper {
  static camelize = (str, decapitalize = false) => s.camelize(str, decapitalize);

  static dasherize = (str) => s.dasherize(str);

  static underscored = (str) => s.underscored(str);

  static classify = (str) => s.classify(str);

  static titleize = (str) => s.titleize(str);

  static humanize = (str) => s.humanize(str);

  static decapitalize = (str) => s.decapitalize(str);

  static capitalize = (str) => s.capitalize(str);

  static pluralize = (str) => pluralize(str);
}

export default StringHelper;
