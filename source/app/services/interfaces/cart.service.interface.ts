import { Observable } from "rxjs";
import { Cart } from "../../models/cart.model";
import { InsertProductIntoCartRequest } from "../../payloads/requests/cart-payloads/insertProductIntoCartRequest";

export interface ICartService {
    getCart(): Observable<Cart>;
    addItem(item: InsertProductIntoCartRequest): Observable<Cart>;
}