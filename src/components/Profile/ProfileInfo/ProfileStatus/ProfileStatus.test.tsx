import ProfileStatus from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatus";
import {create, ReactTestInstance} from "react-test-renderer";

describe('ProfileStatus', () => {
    test('status from props should be', () => {
        const component = create(<ProfileStatus status={'it-incubator.com'} updateStatus={()=>{}}/>)
        const instance = component.getInstance() as null | ReactTestInstance;
        // @ts-ignore
        expect(instance.state.status).toBe('it-incubator.com')
    });
});