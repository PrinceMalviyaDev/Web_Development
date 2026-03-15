import { type Asset } from '../types';

interface PortfolioSummaryProps {
    assets: Asset[]
}

function PortfolioSummary({assets}: PortfolioSummaryProps){
    const totalValue = assets.reduce((sum, asset) => sum = sum + asset.value, 0);

    const avgChange = 
        assets.length > 0 
            ? assets.reduce((sum, asset) => sum = sum + asset.change, 0) / assets.length
            : 0;
    return(
        <div>
            <h2>Portfolio Summary:</h2>
            <p>Total Value: ${totalValue.toFixed(2)}</p>       
            <p>Average Change: ${avgChange.toFixed(2)}</p>       
        </div>
    )
}

export default PortfolioSummary;