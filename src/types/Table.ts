export interface OrderSheet {
    id: number;
    customerName: string;
    totalValue: number;
    [key: string]: any; 
  }
  
  export interface PdvDevice {
    id: number;
    [key: string]: any;
  }
  
  export interface Table {
    id: number;
    title: string;
    idleTime?: number;
    lastOrderCreated?: string;
    hash: string;
    hasPdv: boolean;
    activity: "busy" | "empty" | "active" | string;
    pdvDevices?: PdvDevice[];
    orderSheets?: OrderSheet[];
    
    status?: "Em Atendimento" | "Disponível" | "Ocupada";
  }
  