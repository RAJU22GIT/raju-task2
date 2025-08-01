namespace orderapp.db;
 
entity Orders{
    key ID : UUID;
    OrderDate: Date;
    totalAmount : Decimal(9,2);
    status: String enum{Pending;Processing;Shipped;Cancelled};
    createdAt : Timestamp @cds.on.insert: $now;
    createdBy : String @cds.on.insert: $user;
}