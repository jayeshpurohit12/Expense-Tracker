import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {BlurView} from '@react-native-community/blur';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../constants/colors';
import {scale} from '../../../constants/Layout';
import {useWallet} from './hooks';
import {storage} from '../../../../storage';
import moment from 'moment';

const Wallet = () => {
  const userId = JSON.parse(storage.getString('userInfo') as string)?.id;

  const {data, isLoading} = useWallet(userId);

  const currentDate = moment(data?.Wallet?.date, 'MM YYYY')
    ?.format('MMM YYYY')
    ?.toUpperCase();

  return (
    <View>
      <Text style={styles.walletHeading}>Wallet</Text>

      <View style={styles.walletContainer}>
        <BlurView style={styles.blurView} blurType="light" blurAmount={20} />
        <View style={styles.balanceContainer}>
          <FontAwesome5
            name="dot-circle"
            color={colors.white.default}
            size={16}
            style={{marginRight: scale(6)}}
          />
          <Text style={styles.availableText}>Available balance</Text>
        </View>
        <Text style={styles.totalAmount}>$ {data?.Wallet?.balance}</Text>

        <View style={styles.lineBreaker} />

        <Text style={styles.currentMonth}>{currentDate}</Text>

        <View style={styles.spentEarnedContainer}>
          <View>
            <View style={styles.flexContainer}>
              <FontAwesome5
                name="dot-circle"
                color={colors.white.default}
                size={16}
                style={{marginRight: scale(6)}}
              />
              <Text style={styles.spentText}>Spent</Text>
            </View>
            <Text style={styles.amount}>$ {data?.Wallet?.spend}</Text>
          </View>

          <View>
            <View style={styles.flexContainer}>
              <FontAwesome5
                name="dot-circle"
                color={colors.white.default}
                size={16}
                style={{marginRight: scale(6)}}
              />
              <Text style={styles.spentText}>Earned</Text>
            </View>
            <Text style={styles.amount}>$ {data?.Wallet?.earned}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
