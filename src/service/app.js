export class AppService {
  repoA

  constructor(
    ra
  ) {
    this.repoA = ra
  }

  findByCondition = async (filter) => {
    try {
      return await this.repoA.findAndCountByCondition(filter)
    } catch (err) {
      throw err
    }
  }
  findByNames = async (filter) => {
    try {
      return await this.repoA.findByNames(filter)
    } catch (err) {
      throw err
    }
  }
}