'use strict';

/**
 *
 *
 * @class DataModel
 */
class DataModel {
  /**
   *Creates an instance of DataModel.
   * @param {*} schema
   * @memberof DataModel
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   *
   * Function that will read all or read one record on the database 
   * @param {*} _id
   * @returns resolved promise
   * @memberof DataModel
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  /**
   *
   * Function that creates to the database
   * @param {*} record
   * @returns resolved promise
   * @memberof DataModel
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   *
   * Function that pdates record in the database
   * @param {*} _id
   * @param {*} entry
   * @memberof DataModel
   */
  put(_id, entry) {
    this.schema.findByIdAndUpdate(_id, entry);
  }

  /**
   *
   * Function that deletes from the database
   * @param {*} _id
   * @param {*} id
   * @memberof DataModel
   */
  delete(id) {
    this.schema.findByIdAndDelete(_id);
  }
}

module.exports = DataModel;