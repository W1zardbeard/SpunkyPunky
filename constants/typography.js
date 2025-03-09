import Colors from './colors';
import { Platform } from 'react-native';




const Typography = {
    header: {
        fontFamily: 'Inter-Bold',
        fontSize: 28,
        color: Colors.black
    },
    h1: {
        fontSize: 22,
        color: Colors.black,
        fontFamily: 'Inter-Bold',
    },
    h2: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.black,
        fontFamily: 'Inter-Bold',
    },
    h3: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.black,
        fontFamily: 'Inter-Bold',
    },
    p1: {
        fontSize: 17,
        color: Colors.black,
        fontWeight: 'normal',
        fontFamily: 'Inter-Regular',
    },
    p2: {
        fontSize: 15,
        color: Colors.black,
        fontWeight: 'normal',
        fontFamily: 'Inter-Regular',
    },
    p3: {
        fontSize: 12,
        color: Colors.black,
        fontWeight: 'normal',
        fontFamily: 'Inter-Regular',
    },
}

export default Typography;


