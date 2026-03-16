import { useReducer } from "react";
import AssetList from "./components/AssetList"; 
import AssetForm from "./components/AssetForm";
import PortfolioSummary from "./components/PortfolioSummary";
import AssetEditor from "./components/AssetEditor";
import { type Asset } from "./types"
import { portfolioReducer, type PortfolioState } from "./reducer/portfolioReducer";

function App() {
  
  const [state, dispatch] = useReducer(portfolioReducer, {
    assets: []
  } as PortfolioState);


  const addAsset = (asset: Asset) => {      // This function will be passed to AssetForm and called when a new asset is added
    dispatch({ type: "add", asset });   // Dispatch an "add" action to the reducer with the new asset
  };

  const removeAsset = (symbol: string) => {   // This function will be passed to AssetList and called when an asset is removed
    dispatch({ type: "remove", symbol });   // Dispatch a "remove" action to the reducer with the symbol of the asset to remove
  };

  const updateAsset = (asset: Asset) => {   // This function will be passed to AssetEditor and called when an asset is updated
    dispatch({ type: "update", asset });   // Dispatch an "update" action to the reducer with the updated asset information
  };

  return (
    <div>
      <h1>Portfolio Manager</h1>

      <AssetForm onAdd={addAsset} />

      <AssetList
        assets={state.assets}   // Pass the current list of assets from the state to AssetList
        onRemove={removeAsset}   // Pass the removeAsset function to AssetList so it can call it when an asset is removed
      />

      <PortfolioSummary assets={state.assets}/>   {/* Pass the current list of assets to PortfolioSummary to calculate and display the summary */}
      <AssetEditor onUpdate={updateAsset} />    {/* Pass the updateAsset function to AssetEditor so it can call it when an asset is updated */}
    </div>
    
  );
}

export default App;