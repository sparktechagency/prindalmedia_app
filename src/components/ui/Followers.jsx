import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import tw from "twrnc";

const Followers = () => {
  const [isFollower, setIsFollower] = useState(false);

  const handleFollow = () => setIsFollower(!isFollower);

  return (
    <View>
      {/* when the api changes ScrollView and adds flatList  */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*  following  user content wrapp   */}
        <View
          style={tw`bg-[#D5D5D5] bg-opacity-10 flex-row justify-between items-center my-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={tw`h-14 w-14 rounded-full`}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg2PWrY_5mkISXy_GqXWUYPbglvpL6FSUgg&s",
              }}
            />
            <Text style={tw`text-4.2 font-bold`}>Saka</Text>
          </View>
          <View>
            <Pressable
              onPress={handleFollow}
              style={tw`  ${
                isFollower
                  ? " border-2 border-[#B0B0B0] bg-[#B0B0B0] bg-opacity-20 "
                  : "bg-[#0063E5]"
              }  py-1 px-5  rounded-full `}
            >
              <Text
                style={tw` ${
                  isFollower ? "text-[#B0B0B0]" : "text-white"
                }  `}
              >
                {" "}
                {isFollower ? "Following" : "Follow"}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
       
      </ScrollView>
    </View>
  );
};

export default Followers;
