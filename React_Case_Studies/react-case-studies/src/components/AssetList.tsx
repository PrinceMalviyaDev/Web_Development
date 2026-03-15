import { type Asset } from '../types';

interface AssetListProps {
    assets: Asset[];
    onRemove: (symbol: string) => void;
}

export default function AssetList ({assets, onRemove}: AssetListProps){
    return (
        <ul>
            {assets.map(a => (
                <li key={a.symbol}>
                    {a.name} ({a.symbol}) : ${a.value} ({a.change > 0 ? "+" : ""}{a.change}%)
                    <button onClick={() => onRemove(a.symbol)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

