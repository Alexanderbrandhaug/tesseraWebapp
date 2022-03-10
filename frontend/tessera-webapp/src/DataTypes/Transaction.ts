export { Transaction };

class Transaction {
  sellerID: number;
  buyerID: number;
  postID: number;

  constructor(sellerID: number, buyerID: number, postID: number) {
    this.sellerID = sellerID;
    this.buyerID = buyerID;
    this.postID = postID;
  }

  getTransactionData() {
    return {
      sellerID: this.sellerID,
      buyerID: this.buyerID,
      postID: this.postID
    }
  }
}
