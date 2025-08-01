using { orderapp.db } from '../db/schema';
 
 
service OrderService @(
    path:'/api/Orders'
){
    entity OrderSet as projection on db.Orders;
}