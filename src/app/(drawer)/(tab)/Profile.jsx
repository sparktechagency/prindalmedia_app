// ProfileCard.tsx
import { IconRecents, IconUserProfile, Iconsfollower } from "@/assets/Icon";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import RecentActivityList from "../../../components/ui/RecentActivityList";
import tw from "../../../lib/tailwind";

// tabs name and icons

const Profile = () => {
  return (
    <View style={tw` flex-1  bg-primaryBg`}>
      <View style={tw` flex-1 px-[4%]`}>
        <Text style={tw`text-4.2 mt-8 text-[#121212] font-bold mb-5.2`}>
          My Profile
        </Text>
        <View style={tw`mb-4`}>
          {/* Profile image and badge */}
          <View style={tw`items-center relative`}>
            <Image
              source={require("@/assets/images/image.png")} // Replace with your image
              style={tw`w-20 h-20 rounded-full`}
            />
            <Link
              style={tw`absolute bottom-0 right-32 bg-blue-500 p-2 rounded-full`}
              href={"/provers/1"}
            >
              <View>
                {/* <Icon name="edit" size={18} color="#fff" /> */}
                <SvgXml xml={IconUserProfile} />
              </View>
            </Link>
          </View>

          {/* Name and handle */}
          <View style={tw`mt-4 items-center`}>
            <Text style={tw`text-xl font-inter-700`}>Mark Phillips</Text>
            <Text style={tw`text-3 text-textgray font-inter-500`}>
              @marke_7
            </Text>
          </View>

          {/* Bio */}
          <Text style={tw`text-center text-textgray mt-4 leading-6`}>
            Food lover sharing my journey through bites, sips unforgettable
            meals 🍕🍔🌮
          </Text>

          {/* Follower stats */}
          <View style={tw`flex-row mt-4  justify-center  gap-2`}>
            <Link href={"/userfollowing"}>
              <View
                style={tw`items-center  justify-center flex-row gap-1.3  p-2 rounded-2 px-6 `}
              >
                <SvgXml xml={Iconsfollower} />
                <Text style={tw` font-inter-400 `}>Followers:</Text>
                <Text style={tw`text-textPrimary font-inter-700`}>5.1k</Text>
              </View>
            </Link>
            {/* Following stats */}
            <Link href={"/userfollowing/following"}>
              <View
                style={tw`items-center justify-center flex-row gap-1.3  p-2 rounded-2 px-6 `}
              >
                <SvgXml xml={Iconsfollower} />
                <Text style={tw` font-inter-400 `}>Following:</Text>
                <Text style={tw`text-textPrimary font-inter-700`}>1.1k</Text>
              </View>
            </Link>
          </View>
        </View>

        {/* */}
        <View style={tw`flex-1`}>
          <View style={tw` `}>
            <View style={tw`flex-row items-center gap-2 my-4`}>
              <SvgXml xml={IconRecents} />
              <Text style={tw`text-4 text-[#121212] font-inter-700`}>
                Recent activity list
              </Text>
            </View>
          </View>

          <RecentActivityList />
        </View>
      </View>
    </View>
  );
};

export default Profile;
