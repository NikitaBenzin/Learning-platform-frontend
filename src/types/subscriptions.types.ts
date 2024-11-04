export interface IUserSubscription {
  startDate?: Date;
  endDate?: Date;
  isActive?: boolean;
}

export interface ISubscriptionPlan {
  name: string;
  price: number;
  duration: number;
  description: string;
}
