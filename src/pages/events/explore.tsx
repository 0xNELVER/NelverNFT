import { Grid } from "@mantine/core";
import { EventCard } from "@nelver/client/components/EventCard";
import { MainLayout } from "@nelver/client/components/MainLayout";
import { type NextPageWithLayout } from "@nelver/pages/_app";
import Head from "next/head";

const MockEvents = [
  {
    id: 1,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/Qmb5YRL6hjutLUF2dw5V5WGjQCip4e1WpRo8w3iFss4cWB",
      banner:
        "https://link3-image.cyberconnect.dev/b6ae09f3-15e9-4984-2dd7-08a697f4229a/6f3e483c12fe3c2d?eventTitle=Demo+Day+%26+Awards+Ceremony%3A+Connected+2023&time=1678708800&speakers=%5B%7B%22name%22%3A%22CyberConnect%22%2C%22title%22%3A%22Co-Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Fb6ae09f3-15e9-4984-2dd7-08a697f4229a%2F1866b7918f845747%22%7D%2C%7B%22name%22%3A%22BNB+Chain%22%2C%22title%22%3A%22Co-Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Fb6ae09f3-15e9-4984-2dd7-08a697f4229a%2F8b9545fa3fb4eef1%22%7D%5D&place=others&extraPlaceInfo=binance&orgName=CyberConnect&orgLogo=https%3A%2F%2Fcyberconnect.mypinata.cloud%2Fipfs%2FQmb5YRL6hjutLUF2dw5V5WGjQCip4e1WpRo8w3iFss4cWB&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicxuvml57asz6vicjd2spky6snmbvh23m7bv4ceaatp6yyy4gzvsa&timezone=-5&isThumb=true",
    },
    startAt: "2021-08-10T18:05:00.000Z",
    going: 10000,
    labels: [],
  },

  {
    id: 2,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2023-08-10T00:00:00.000Z",
    going: 100000,
    labels: [],
  },

  {
    id: 3,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000000,
    labels: [],
  },

  {
    id: 4,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 5,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 6,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 421123,
    title: "Evdsadasdasdent 1dsadsadsadasdsads sdadasdsadsadsa",
    brand: {
      name: "Brand 1321321 dsadsa dddddddddddddddddddddd",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 421,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 321,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 421,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 321,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 421,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 321,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 421,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 321,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 421,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 321,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 421,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },

  {
    id: 321,
    title: "Event 1",
    brand: {
      name: "Brand 1",
      logo: "https://ipfs.cyberconnect.dev/ipfs/bafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta",
      banner:
        "https://link3-image.cyberconnect.dev/af30b559-2215-4a0e-8eee-ffd3a651188c/288e67f3e14b1065?eventTitle=ETH+Shanghai+Upgrade+%26+2023+Web3+Outlook&time=1678460400&speakers=%5B%7B%22name%22%3A%22The+Aquarium%22%2C%22title%22%3A%22Host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb04205d58464ee38%22%7D%2C%7B%22name%22%3A%22Whale+Coin+Talk%22%2C%22title%22%3A%22Co-host%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fa900ec6ad37c11f8%22%7D%2C%7B%22name%22%3A%22Tusima%22%2C%22title%22%3A%22Hannah%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2Fb59af4cbde72473a%22%7D%2C%7B%22name%22%3A%22MAP+Protocol+%F0%9F%92%99+MAPO%22%2C%22title%22%3A%22Michelle%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F71f81ff623c10483%22%7D%2C%7B%22name%22%3A%22TiTi+Protocol%22%2C%22title%22%3A%22Hyman%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F657e41e6d5b286dd%22%7D%2C%7B%22name%22%3A%22Sepana+%F0%9F%94%8D+%40+ETH+Denver%22%2C%22title%22%3A%22Prashant%22%2C%22avatar%22%3A%22https%3A%2F%2Flink3-image.cyberconnect.dev%2Faf30b559-2215-4a0e-8eee-ffd3a651188c%2F92c422490ccd2327%22%7D%5D&place=twitter&extraPlaceInfo=&orgName=Tusima+Network&orgLogo=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreiemp7i6jjjuskmyxvdmixxfv7bhqmbcpjng6c5qpgl4fwgovmyeta&timezone=%2B0&raffleText=350++USDT+Giveaway+Raffle%21&badgeUrl=https%3A%2F%2Fipfs.cyberconnect.dev%2Fipfs%2Fbafkreicy2j2gumpwbqmx7mw4b3ghfixczsa3vtcuo5ypxpv5kn6unx2tz4&isThumb=true",
    },
    startAt: "2021-08-10T00:00:00.000Z",
    going: 1000,
    labels: [],
  },
];

const ExploreEvents: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Nelver Events</title>
        <meta name="description" content="Nelver Explore Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid grow>
          {/* <Grid.Col span={12}>Filter Advanced</Grid.Col>
          <Grid.Col span={2}>Another Filter</Grid.Col> */}
          <Grid.Col span={12}>
            <Grid columns={5} gutter="lg">
              {MockEvents.map((event) => {
                return (
                  <Grid.Col key={event.id} span={1}>
                    <EventCard {...event} />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Grid.Col>
        </Grid>
      </main>
    </>
  );
};
ExploreEvents.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default ExploreEvents;
