import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import {UserItem} from "../user/components/UserItem";
import {Users} from "../user/pages/Users";
import Avatar from "../shared/components/UIelements/Avatar/Avatar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/UserItem">
                <UserItem/>
            </ComponentPreview>
            <ComponentPreview path="/Users">
                <Users/>
            </ComponentPreview>
            <ComponentPreview path="/Avatar">
                <Avatar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews