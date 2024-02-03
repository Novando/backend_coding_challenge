export class TransactionService {
  repoT

  constructor(
    ra
  ) {
    this.repoT = ra
  }

  userBoughtMoreThanOne = async (filter) => {
    try {
      return await this.repoT.userBoughtMoreThanOne(filter)
    } catch (err) {
      throw err
    }
  }
}