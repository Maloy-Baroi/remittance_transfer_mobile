import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const services = [
    { icon: '💸', title: 'সেন্ড মানি', color: '#FF6B6B' },
    { icon: '📱', title: 'মোবাইল রিচার্জ', color: '#4ECDC4' },
    { icon: '💳', title: 'ক্যাশ আউট', color: '#45B7D1' },
    { icon: '🛍️', title: 'পেমেন্ট', color: '#FD7272' },
    { icon: '🎮', title: 'অ্যাড মানি', color: '#FFA502' },
    { icon: '💰', title: 'পে বিল', color: '#32FF7E' },
    { icon: '🏦', title: 'সেভিংস', color: '#FF6348' },
    { icon: '🎁', title: 'অফার', color: '#A29BFE' },
  ];

  const quickActions = [
    { icon: '📱', title: 'মোবাইল রিচার্জ' },
    { icon: '📞', title: 'কিউআর স্ক্যান' },
    { icon: '⚡', title: 'বিদ্যুৎ বিল' },
    { icon: '💳', title: 'ব্যাংক' },
    { icon: '🏠', title: 'বাড়ি' },
  ];

  const partners = [
    { name: 'robi', logo: 'https://via.placeholder.com/50' },
    { name: 'bdgov', logo: 'https://via.placeholder.com/50' },
    { name: 'daraz', logo: 'https://via.placeholder.com/50' },
    { name: 'sports', logo: 'https://via.placeholder.com/50' },
    { name: 'dexl', logo: 'https://via.placeholder.com/50' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E91E63" />

      {/* Header */}
      <LinearGradient
        colors={['#E91E63', '#EC407A']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.scanButton}>
              <MaterialIcons name="crop-free" size={24} color="white" />
            </TouchableOpacity>
            <TextInput
              placeholder="ক্যাশআউট, পেমেন্ট"
              placeholderTextColor="#fff9"
              style={styles.searchBar}
            />
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.trophyButton}>
              <Ionicons name="trophy" size={20} color="white" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>৫</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="mail-unread" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Services Grid */}
        <View style={styles.servicesContainer}>
          <View style={styles.servicesGrid}>
            {services.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceItem}>
                <View style={[styles.serviceIcon, { backgroundColor: service.color + '20' }]}>
                  <Text style={styles.serviceEmoji}>{service.icon}</Text>
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>আমার বিকাশ</Text>
          <View style={styles.quickActionsRow}>
            {quickActions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.quickActionItem}>
                <View style={styles.quickActionIcon}>
                  <Text style={styles.quickActionEmoji}>{action.icon}</Text>
                </View>
                <Text style={styles.quickActionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Promotional Cards */}
        <View style={styles.promoSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <LinearGradient
              colors={['#B8389A', '#D648AD']}
              style={styles.promoCard}
            >
              <View style={styles.promoContent}>
                <Text style={styles.promoTitle}>ফ্রি অফার</Text>
                <Text style={styles.promoSubtitle}>৮০% পর্যন্ত</Text>
                <Text style={styles.promoDescription}>BKASH 80 এ পর্যন্ত ডিসকাউন্ট</Text>
              </View>
              <View style={styles.promoIcon}>
                <Text style={styles.promoEmoji}>🎁</Text>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={['#B8389A', '#D648AD']}
              style={styles.promoCard}
            >
              <View style={styles.promoContent}>
                <Text style={styles.promoTitle}>প্রোমো অফার</Text>
                <Text style={styles.promoSubtitle}>৮০% পর্যন্ত</Text>
                <Text style={styles.promoDescription}>BKASH 80 এ পর্যন্ত ডিসকাউন্ট</Text>
              </View>
              <View style={styles.promoIcon}>
                <Text style={styles.promoEmoji}>🎁</Text>
              </View>
            </LinearGradient>
          </ScrollView>
          <View style={styles.paginationDots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Partners */}
        <View style={styles.partnersSection}>
          <Text style={styles.sectionTitle}>পার্টনারস</Text>
          <View style={styles.partnersRow}>
            {partners.map((partner, index) => (
              <TouchableOpacity key={index} style={styles.partnerItem}>
                <Image source={{ uri: partner.logo }} style={styles.partnerLogo} />
                <Text style={styles.partnerName}>{partner.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Ads Section */}
        <View style={styles.adsSection}>
          <Text style={styles.sectionTitle}>অফার</Text>
          <TouchableOpacity style={styles.adCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/350x120' }}
              style={styles.adImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#E91E63" />
          <Text style={[styles.navText, styles.activeNavText]}>হোম</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="qr-code-scanner" size={24} color="#666" />
          <Text style={styles.navText}>QR স্ক্যান</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail" size={24} color="#666" />
          <Text style={styles.navText}>ইনবক্স</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  scanButton: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: 'white',
    fontSize: 14,
  },
  trophyButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FFEB3B',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  servicesContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 15,
    marginHorizontal: 15,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  serviceItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceEmoji: {
    fontSize: 24,
  },
  serviceTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionItem: {
    alignItems: 'center',
    width: '18%',
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionEmoji: {
    fontSize: 24,
  },
  quickActionTitle: {
    fontSize: 11,
    textAlign: 'center',
    color: '#666',
  },
  promoSection: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  promoCard: {
    width: width - 50,
    height: 120,
    borderRadius: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  promoSubtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  promoDescription: {
    color: 'white',
    fontSize: 12,
    opacity: 0.9,
  },
  promoIcon: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoEmoji: {
    fontSize: 40,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    gap: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
  },
  activeDot: {
    backgroundColor: '#E91E63',
  },
  partnersSection: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  partnersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  partnerItem: {
    alignItems: 'center',
  },
  partnerLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
  },
  partnerName: {
    fontSize: 11,
    color: '#666',
  },
  adsSection: {
    marginTop: 30,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  adCard: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  adImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#E91E63',
  },
});