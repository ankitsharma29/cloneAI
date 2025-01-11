import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const shortcuts = [
  {id: 1, color: '#8B7355', icon: '📄'},
  {id: 2, color: '#4682B4', icon: '🌐'},
  {id: 3, color: '#2E8B57', icon: '🎓'},
  {id: 4, color: '#8B3A3A', icon: '🎵'},
];

const ShortcutsCard = () => {
  const renderItemShortcuts = useCallback(
    ({item}: any) => (
      <TouchableOpacity
        key={item.id}
        style={[styles.shortcutButton, {backgroundColor: item.color}]}>
        <Text style={styles.shortcutIcon}>{item.icon}</Text>
      </TouchableOpacity>
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <FlatList
      horizontal
      data={shortcuts ?? []}
      renderItem={renderItemShortcuts}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  shortcutButton: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginHorizontal: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortcutIcon: {
    fontSize: 24,
  },
});

export default ShortcutsCard;
