export default {
    name: 'transaction',
    type: 'document',
    title: 'Transaction',
    fields: [
      {
        name:"transaction_type",
        title: "Transaction Type",
        type: "string",
      },
      {
        name: "description",
        type: "text",
        title: "Transaction"
      },
      {
        name: "amount",
        type: "string",
        title: "Amount"
      },
      {
        name:"userID",
        type: "reference",
        to:[{type: "user"}]
      }
    ]
  }