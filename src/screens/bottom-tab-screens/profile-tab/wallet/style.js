import {StyleSheet} from 'react-native';
import colors from '../../../../services/colors';
import {mvs} from '../../../../services/metrices';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: mvs(25),
  },
  body: {
    flex: 1,
    paddingHorizontal: mvs(23),
  },
  cameraButton: {
    alignSelf: 'center',
    height: mvs(74),
    width: mvs(74),
    backgroundColor: colors.secondary,
    borderRadius: mvs(1000),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_container: {
    paddingVertical: mvs(20),
  },
  wallet: {
    backgroundColor: colors.white,
    marginTop: mvs(30),
    borderRadius: mvs(20),
    paddingLeft: mvs(10),
    width: '100%',
  },
  blnc: {
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(30),
    borderRadius: mvs(20),
    width: '75%',
    justifyContent: 'center',
  },
  button: {
    marginTop: mvs(80),
    marginHorizontal: mvs(35),
  },
});
