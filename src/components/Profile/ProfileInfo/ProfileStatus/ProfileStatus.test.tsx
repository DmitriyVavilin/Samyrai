import ProfileStatus from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatus";
import {create} from "react-test-renderer";

describe('ProfileStatus', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it-incubator.com'} updateStatus={() => {
        }}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe('it-incubator.com')
    });
});

