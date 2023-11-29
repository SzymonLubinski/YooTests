
export interface Product{
    id: string;
    name: string;
    images: string[];
    price: number;
    description: string;
}

export interface CartItem extends Product{
    amount: number;
}

export interface CartState{
    items: CartItem[];
    totalAmount: number;
    totalPrice: number;
    freeDelivery: boolean;
}

export interface DeliveryAddress {
    firstName?: string;
    lastName?: string;
    streetAddressLine1?: string;
    streetAddressLine2?: string;
    email?: string;
    tel?: string;
    // city?: string;
    // street?: string;
    // postalCode?: string;
}


