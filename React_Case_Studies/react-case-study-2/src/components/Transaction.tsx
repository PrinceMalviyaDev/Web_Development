type CurrencyType = 'USD' | 'EUR' | 'GBP';

interface TransactionProps {
    id: string,
    amount: number,
    currency: CurrencyType
}


function Transaction(props:TransactionProps) {
    return(
        <div>{props.amount} {props.currency}</div>
    )
}

export default Transaction;