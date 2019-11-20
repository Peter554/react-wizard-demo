import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'mutationobserver-shim'

Enzyme.configure({ adapter: new Adapter() })
