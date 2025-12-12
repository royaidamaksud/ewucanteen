export interface Staff {
  staff_id: number;
  name: string;
  role: string;
  phone: string;
}

export interface Student {
  student_id: number;
  name: string;
  department: string;
  phone: string;
}

export interface MenuItem {
  item_id: number;
  name: string;
  price: number;
  available: boolean;
  image_url?: string; // New field for food images
  // Join result from Supabase
  stock?: {
    stock_id: number;
    quantity: number;
  }[];
}

export interface Stock {
  stock_id: number;
  item_id: number;
  quantity: number;
  last_updated: string;
}

export interface Order {
  order_id: number;
  student_id: number;
  staff_id?: number;
  order_date: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
  total: number;
  students?: Student; // For join queries
}

export interface OrderDetail {
  detail_id: number;
  order_id: number;
  item_id: number;
  quantity: number;
  price: number;
  menu_items?: MenuItem; // For join queries
}

// Helper type for Cart
export interface CartItem extends MenuItem {
  quantity: number;
}