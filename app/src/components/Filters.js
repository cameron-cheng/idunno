import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Picker,
  Slider,
  TouchableOpacity,
} from "react-native";
import { Input, Button, Overlay } from "react-native-elements";
import { Container, Card, CheckBox, ListItem, Body } from "native-base";
import Header from "./Header";
import Footer from "./Footer";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Filters(props) {
  const [visible, setVisible] = useState(false);
  const [nickname, setNickname] = useState("");
  const { filters, setFilters } = props;

  const handleCreateRoom = () => {
    props.createRoom(nickname);
  };

  if (props.redirect.invitation) {
    props.history.push('/invitation');
  }

  function toggleOverlay() {
    setVisible(!visible);
  }

  function renderSearchType() {
    if (filters.searchType === "nearby") {
      return (
        <View
          style={{
            alignItems: "stretch",
            justifyContent: "center",
            height: 40,
            top: -30,
          }}
        >
          <Slider
            minimumValue="500"
            maximumValue="2000"
            minimumTrackTintColor="#2a9d8f"
            step="10"
            value={filters.radius}
            onValueChange={(value) => setFilters({ ...filters, radius: value })}
          />
          <Text style={{ paddingVertical: 15 }}>Radius: {filters.radius}m</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "stretch",
            justifyContent: "center",
            height: 40,
            top: -30,
          }}
        >
          <Input
            style={styles.input}
            placeholder="Enter a location"
            onChangeText={(text) =>
              setFilters({ ...filters, area: text.toLowerCase().trim() })
            }
          />
        </View>
      );
    }
  }
  return (
    <Container style={styles.container}>
      <Header />

      <View style={styles.filters}>
        <Card style={styles.card}>
          <View style={{ width: 300, justifyContent: "space-between" }}>
            <View style={{ justifyContent: "center" }}>
              <View>
                <Picker
                  style={{ top: -30 }}
                  selectedValue={filters.searchType}
                  onValueChange={(currentType) =>
                    setFilters({ ...filters, searchType: currentType })
                  }
                >
                  <Picker.Item label="Search Nearby" value="nearby" />
                  <Picker.Item label="Search by Location" value="text" />
                </Picker>
              </View>
              {renderSearchType()}
              <View
                style={{
                  alignItems: "stretch",
                  paddingVertical: 20,
                  justifyContent: "center",
                }}
              >
                <Slider
                  minimumValue="0"
                  maximumValue="4"
                  minimumTrackTintColor="#2a9d8f"
                  value={filters.price}
                  onValueChange={(value) =>
                    setFilters({ ...filters, price: Math.ceil(value) })
                  }
                />
                <Text>
                  Price: {"$".repeat(Math.ceil(filters.price)) || "Free"}
                </Text>
              </View>
              <TouchableOpacity onPress={toggleOverlay} style={{ top: -10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    alignSelf: "flex-end",
                    color: "#ee937c",
                    fontWeight: "500",
                  }}
                >
                  More Filters
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ justifyContent: "center", top: 50 }}>
              <Input
                style={{ height: 40 }}
                placeholder="Host Name"
                onChangeText={(text) => setNickname(text.trim())}
                value={nickname}
              ></Input>

              <TouchableOpacity
                onPress={handleCreateRoom}
                style={styles.button}
              >
                <Text style={styles.buttonText}>START DECIDING!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        <Overlay
          overlayStyle={{
            top: 20,
            height: 590,
            borderRadius: 10,
            width: 350,
            backgroundColor: "#fcfaf2",
          }}
          isVisible={visible}
          onBackdropPress={toggleOverlay}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              flexWrap: "wrap",
              paddingVertical: 15,
            }}
          >
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.family}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, family: !filters.family })
                }
              />
              <Body>
                <Text style={styles.checkText}>Family</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.buffet}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, buffet: !filters.buffet })
                }
              />
              <Body>
                <Text style={styles.checkText}>Buffet</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.breakfast}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, breakfast: !filters.breakfast })
                }
              />
              <Body>
                <Text style={styles.checkText}>Breakfast</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.cafe}
                color={"#ee937c"}
                onPress={() => setFilters({ ...filters, cafe: !filters.cafe })}
              />
              <Body>
                <Text style={styles.checkText}>Café</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.brewery}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, brewery: !filters.brewery })
                }
              />
              <Body>
                <Text style={styles.checkText}>Brewery</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.burger}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, burger: !filters.burger })
                }
              />
              <Body>
                <Text style={styles.checkText}>Burger</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.japanese}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, japanese: !filters.japanese })
                }
              />
              <Body>
                <Text style={styles.checkText}>Japanese</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.thai}
                color={"#ee937c"}
                onPress={() => setFilters({ ...filters, thai: !filters.thai })}
              />
              <Body>
                <Text style={styles.checkText}>Thai</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.mexican}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, mexican: !filters.mexican })
                }
              />
              <Body>
                <Text style={styles.checkText}>Mexican</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.greek}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, greek: !filters.greek })
                }
              />
              <Body>
                <Text style={styles.checkText}>Greek</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.casual}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, casual: !filters.casual })
                }
              />
              <Body>
                <Text style={styles.checkText}>Casual Dining</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.fine}
                color={"#ee937c"}
                onPress={() => setFilters({ ...filters, fine: !filters.fine })}
              />
              <Body>
                <Text style={styles.checkText}>Fine Dining</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.bistro}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, bistro: !filters.bistro })
                }
              />
              <Body>
                <Text style={styles.checkText}>Bistro</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.vegan}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, vegan: !filters.vegan })
                }
              />
              <Body>
                <Text style={styles.checkText}>Vegan</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.bar}
                color={"#ee937c"}
                onPress={() => setFilters({ ...filters, bar: !filters.bar })}
              />
              <Body>
                <Text style={styles.checkText}>Bar/Pub</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.american}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, american: !filters.american })
                }
              />
              <Body>
                <Text style={styles.checkText}>American</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.chinese}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, chinese: !filters.chinese })
                }
              />
              <Body>
                <Text style={styles.checkText}>Chinese</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.indian}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, indian: !filters.indian })
                }
              />
              <Body>
                <Text style={styles.checkText}>Indian</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.italian}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, italian: !filters.italian })
                }
              />
              <Body>
                <Text style={styles.checkText}>Italian</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.listItem}>
              <CheckBox
                checked={filters.french}
                color={"#ee937c"}
                onPress={() =>
                  setFilters({ ...filters, french: !filters.french })
                }
              />
              <Body>
                <Text style={styles.checkText}>French</Text>
              </Body>
            </ListItem>

            {/* <CheckBox
                style={{}}
                title='Family'
                checked={filters.family}
                onPress={() => setFilters({...filters, family: !filters.family})}
              />
                <CheckBox
                  title='Casual'
                  checked={filters.casual}
                  onPress={() => setFilters({...filters, casual: !filters.casual})}
                />
              <CheckBox 
                title='Vegan'
                checked={filters.vegan}
                onPress={() => setFilters({...filters, vegan: !filters.vegan})}
              />
              <CheckBox 
                title='Fine Dining'
                checked={filters.fine}
                onPress={() => setFilters({...filters, fine: !filters.fine})}
              />
              <CheckBox 
                title='Café'
                checked={filters.cafe}
                onPress={() => setFilters({...filters, cafe: !filters.cafe})}
              />
              <CheckBox
                title='Buffet'
                checked={filters.buffet}
                onPress={() => setFilters({...filters, buffet: !filters.buffet})}
              />
              <CheckBox 
                title='Bistro'
                checked={filters.bistro}
                onPress={() => setFilters({...filters, bistro: !filters.bistro})}
              />
              <CheckBox
                title='Breakfast'
                checked={filters.breakfast}
                onPress={() => setFilters({...filters, breakfast: !filters.breakfast})}
              />
              <CheckBox
                title='Brewery'
                checked={filters.brewery}
                onPress={() => setFilters({...filters, brewery: !filters.brewery})}
              />
              <CheckBox
                title='Bar/Pub'
                checked={filters.bar}
                onPress={() => setFilters({...filters, bar: !filters.bar})}
              />
              <CheckBox
                title='Burger'
                checked={filters.burger}
                onPress={() => setFilters({...filters, burger: !filters.burger})}
              />
              <CheckBox
                title='Asian'
                checked={filters.asian}
                onPress={() => setFilters({...filters, asian: !filters.asian})}
              />
              <CheckBox
                title='Indian'
                checked={filters.indian}
                onPress={() => setFilters({...filters, indian: !filters.indian})}
              />
              <CheckBox
                title='Mexican'
                checked={filters.mexican}
                onPress={() => setFilters({...filters, mexican: !filters.mexican})}
              />
              <CheckBox
                title='Italian'
                checked={filters.italian}
                onPress={() => setFilters({...filters, italian: !filters.italian})}
              />
              <CheckBox
                title='Greek'
                checked={filters.greek}
                onPress={() => setFilters({...filters, greek: !filters.greek})}
              /> */}

          </View>
          <View style={{ alignSelf: "center", padding: 10 }}>
            <TouchableOpacity
              style={{ backgroundColor: "#ee937c", borderRadius: 10 }}
              onPress={toggleOverlay}
            >
              <Text
                style={{
                  padding: 10,
                  color: "#fcfaf2",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                DONE
              </Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
      <Footer />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfaf2",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  filters: {
    flexDirection: "column",
    justifyContent: "center",
    margin: 40,
  },
  button: {
    backgroundColor: "#ee937c",
    padding: 10,
    borderRadius: 10,
    width: 200,
    shadowColor: "#ae9f77",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fcfaf2",
    fontWeight: "800",
    alignSelf: "center",
  },
  card: {
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#f9f1dc",
    shadowColor: "#988a55",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 20,
    justifyContent: "space-between",
    width: 325,
    height: 600,
    top: 18,
  },
  listItem: {
    width: 140,
  },
  checkText: {
    paddingLeft: 10,
    fontSize: 15,
  },
});
