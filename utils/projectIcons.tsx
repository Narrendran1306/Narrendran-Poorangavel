import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CodeIcon from "@mui/icons-material/Code";

const iconMap: Record<string, React.ElementType> = {
    BusinessCenter: BusinessCenterIcon,
    Inventory: InventoryIcon,
    LocalShipping: LocalShippingIcon,
    PointOfSale: PointOfSaleIcon,
    History: HistoryIcon,
    ShoppingCart: ShoppingCartIcon,
};

export function getProjectIcon(iconName?: string) {
    if (!iconName) return CodeIcon;
    return iconMap[iconName] || CodeIcon;
}