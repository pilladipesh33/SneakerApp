import remoteConfig from '@react-native-firebase/remote-config';

const RemoteConfigService = async () => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 300,
    });
    await remoteConfig().setDefaults({CHANGE_LANGUAGE: 'en'});
    await remoteConfig().fetchAndActivate();
    var getRemoteValue = (key) => remoteConfig().getValue(key);
};

export default RemoteConfigService;
