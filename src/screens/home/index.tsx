import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import Images from '../../Images';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from '../constants/Layout';
import colors from '../constants/colors';
import Wallet from './partials/wallet';
import RecentTransaction from './partials/recent-transaction';
import TransactionSelectModal from './partials/transaction-select-modal';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const initialSnapPoints = useMemo(() => ['25%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const handleSetting = () => {
    navigation.navigate('UserInfo');
  };

  return (
    <ImageBackground
      source={Images.Started}
      style={styles.backgroundImage}
      defaultSource={Images.Started}>
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <Text style={styles.nameText}>Piggypouch</Text>
        <TouchableOpacity
          style={styles.settingIconContainer}
          activeOpacity={0.9}
          onPress={handleSetting}>
          <Ionicons
            name="settings-outline"
            size={25}
            color={colors.white.default}
            style={{padding: scale(5)}}
          />
        </TouchableOpacity>

        <Wallet />
        <RecentTransaction bottomSheetRef={bottomSheetRef} />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={initialSnapPoints}
        handleIndicatorStyle={styles.handleIndicator}
        enablePanDownToClose
        backgroundStyle={{backgroundColor: colors.brandPrimary}}
        backdropComponent={renderBackdrop}>
        <TransactionSelectModal bottomSheetRef={bottomSheetRef} />
      </BottomSheet>
    </ImageBackground>
  );
};

export default Home;
