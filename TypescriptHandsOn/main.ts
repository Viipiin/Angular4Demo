
import { LikeComponent } from './like.component';
// tslint:disable-next-line:eofline
let component = new LikeComponent(10, true);

component.onClick();
console.log(`LikeCount:${component.likeCount},isSelected:${component.isSelected}`);
