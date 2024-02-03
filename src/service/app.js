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
}