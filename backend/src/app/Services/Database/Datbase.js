//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher, Ali Sadah, Kun Ni, Charles Wilkins, Harry Coupe, Jiwa Chhetri. All Rights Reserved.

class Database {
  constructor() {
    // @TODO connfigure knex
    // Create dabase connection
    // this.db = Knex(knexConfig);
  }

  /**
   * Singleton get instance method
   *
   * @returns {Database} single instance of Database
   */
  static getInstance() {
    if (!this.instance) this.instance = new Database();
    return this.instance;
  }

  /**
   * Returns database connection object
   *
   * @returns {knex}
   */
  getKnex() {
    // return this.db
  }

  /**
   * Get's all bus stops paginating by limit and offset
   *
   * @param {number} limit SQL limit value
   * @param {number} offset SQL offset value
   * @throws {Error} if no bus stops are found
   */
  async getBusStops(limit, offset) {
    // try {
    //   const rows = await this.db('bus_stops')
    //     .select()
    //     .limit(limit)
    //     .offset(offset);
    //   if (rows.length === 0) {
    //     throw new Error("No bus stops");
    //   }
    //   return rows;
    // } catch (err) {
    //   throw err;
    // }
  }

  /**
   * Gets bus stop by id
   *
   * @param {string} id id of bus stop
   * @throws {Error} if bus stop doesn't exist
   */
  async getBusStop(id) {
    // try {
    //   const rows = await this.db('bus_stops')
    //     .select()
    //     .where('id', '=', id);
    //   if (rows.length === 0) {
    //     throw new Error("Bus stop doesn't exist.");
    //   }
    //   return rows;
    // } catch (err) {
    //   throw err;
    // }
  }
}

export default Database;
