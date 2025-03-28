export interface PaperSize {
    name: string;
    width: number;
    height: number;
    aspectRatio: number;
  }
  
  export interface PaperOrientation {
    name: string;
    aspectRatio: number;
  }
  
  export interface Frame {
    name: string;
    padding: number;
  }
  
  export interface CartItem {
    id: string;
    size: PaperSize;
    orientation: PaperOrientation;
    frame: Frame;
    comments: string;
    price: number;
  }
  
  export interface DeliveryOption {
    name: string;
    price: number;
    estimatedDays: string;
  }
  
  export const paperSizes: PaperSize[] = [
    {
      name: 'A4',
      width: 210,
      height: 297,
      aspectRatio: 210 / 297
    },
    {
      name: 'A3',
      width: 297,
      height: 420,
      aspectRatio: 297 / 420
    },
    {
      name: 'A2',
      width: 420,
      height: 594,
      aspectRatio: 420 / 594
    }
  ];
  
  export const frames: Frame[] = [
    { name: 'None', padding: 0 },
    { name: 'Thin', padding: 10 },
    { name: 'Medium', padding: 20 },
    { name: 'Wide', padding: 30 }
  ];
  
  export const deliveryOptions: DeliveryOption[] = [
    { name: 'Standard', price: 5.99, estimatedDays: '5-7 business days' },
    { name: 'Express', price: 12.99, estimatedDays: '2-3 business days' },
    { name: 'Next Day', price: 19.99, estimatedDays: 'Next business day' }
  ];
  
  export const getOrientations = (size: PaperSize): PaperOrientation[] => [
    {
      name: 'Portrait',
      aspectRatio: size.width / size.height
    },
    {
      name: 'Landscape',
      aspectRatio: size.height / size.width
    }
  ];
  
  export const calculatePrice = (size: PaperSize, frame: Frame): number => {
    const basePrices: Record<string, number> = {
      'A4': 15,
      'A3': 25,
      'A2': 35
    };
  
    const frameMultipliers: Record<string, number> = {
      'None': 1,
      'Thin': 1.2,
      'Medium': 1.4,
      'Wide': 1.6
    };
  
    return basePrices[size.name] * frameMultipliers[frame.name];
  };