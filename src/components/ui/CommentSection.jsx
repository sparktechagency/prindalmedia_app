import { IconHeart } from "@/assets/Icon";
import { useReplyCommentsMutation } from "@/src/redux/commentApi/commentApi";
import { useCallback, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

const CommentSection = ({ data }) => {
  const [activeReplyId, setActiveReplyId] = useState(null); // Track single active reply ID
  const [replyText, setReplyText] = useState(""); // Single text state
  const [replyComment, { isLoading: replyLoading }] =
    useReplyCommentsMutation();

  const handleLike = useCallback((commentId) => {
    console.log("Liked comment:", commentId);
  }, []);

  const handleReply = useCallback(
    async (commentId) => {
      if (!replyText.trim()) return;

      const data = {
        comment_id: commentId,
        replay: replyText, // Use the single replyText state
      };

      console.log(data);

      try {
        const res = await replyComment({
          comment_id: 3, // অথবা Number("3") যদি string আসে
          reply: "thank you",
        }).unwrap();

        console.log(res);

        setActiveReplyId(null);
        setReplyText("");
      } catch (error) {
        console.error("Reply failed:", error);
      }
    },
    [replyText, replyComment]
  );

  const handleDelete = useCallback((commentId) => {
    console.log("Deleting comment:", commentId);
  }, []);

  const formatTime = (isoString) => {
    return new Date(isoString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toggleReplyInput = (commentId) => {
    if (activeReplyId === commentId) {
      setActiveReplyId(null); // Close if clicking the same one
    } else {
      setActiveReplyId(commentId); // Open new one
    }
    setReplyText(""); // Clear text when switching
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={tw`pb-4`}
    >
      {data?.data?.[0]?.comments?.map((comment) => (
        <View key={comment.id}>
          {/* Main Comment */}
          <View style={tw`flex-row gap-3 py-3`}>
            <Image
              source={{
                uri:
                  comment.avatar ||
                  "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full`}
            />
            <View style={tw`flex-1`}>
              <View style={tw`flex-row justify-between items-start`}>
                <Text style={tw`font-bold`}>{comment.user_name}</Text>
                <Text style={tw`text-xs text-gray-400`}>
                  {formatTime(comment.created_at)}
                </Text>
              </View>

              <Text style={tw`text-sm text-gray-800 mt-1`}>
                {comment.comment}
              </Text>

              <View style={tw`flex-row items-center mt-2 gap-4`}>
                <TouchableOpacity onPress={() => toggleReplyInput(comment.id)}>
                  <Text style={tw`text-xs text-gray-500`}>
                    {activeReplyId === comment.id ? "Cancel" : "Reply"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleLike(comment.id)}>
                  {comment.like > 0 ? (
                    <SvgXml xml={IconHeart} width={16} height={16} />
                  ) : (
                    <Text style={tw`text-xs text-gray-500`}>Like</Text>
                  )}
                  {comment.like > 0 && (
                    <Text style={tw`text-xs text-gray-500 ml-1`}>
                      {comment.like}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>

              {activeReplyId === comment.id && (
                <View style={tw`mt-3 flex-row items-center`}>
                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/men/1.jpg",
                    }}
                    style={tw`w-6 h-6 rounded-full mr-2`}
                  />
                  <TextInput
                    style={tw`flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm`}
                    placeholder="Write a reply..."
                    value={replyText}
                    onChangeText={setReplyText}
                    autoFocus
                  />
                  <TouchableOpacity
                    onPress={() => handleReply(comment.id)}
                    style={tw`ml-2`}
                  >
                    <Text style={tw`text-blue-500 font-bold text-sm`}>
                      send
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          {/* Replies Section */}
          {comment.replies?.length > 0 && (
            <View style={tw`ml-12`}>
              <View
                style={tw`absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200`}
              />

              {comment.replies.map((reply) => (
                <View key={reply.id} style={tw`flex-row gap-3 py-2 pl-3`}>
                  <View
                    style={tw`absolute left-0 h-0.5 w-3 bg-gray-200 top-6`}
                  />

                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/men/1.jpg",
                    }}
                    style={tw`w-8 h-8 rounded-full mt-1 z-10`}
                  />

                  <View style={tw`flex-1 bg-gray-50 rounded-lg p-3`}>
                    <View style={tw`flex-row justify-between items-start`}>
                      <Text style={tw`font-bold text-sm`}>
                        {comment.user_name}
                      </Text>
                      <Text style={tw`text-xs text-gray-400`}>
                        {formatTime(reply.created_at)}
                      </Text>
                    </View>

                    <Text style={tw`text-sm text-gray-800 mt-1`}>
                      {reply.replay}
                    </Text>

                    <View style={tw`flex-row items-center mt-2 gap-4`}>
                      <TouchableOpacity
                        onPress={() => toggleReplyInput(reply.id)}
                      >
                        <Text style={tw`text-xs text-gray-500`}>
                          {activeReplyId === reply.id ? "Cancel" : "Reply"}
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => handleLike(reply.id)}>
                        <Text style={tw`text-xs text-gray-500`}>Like</Text>
                      </TouchableOpacity>
                    </View>

                    {activeReplyId === reply.id && (
                      <View style={tw`mt-3 flex-row items-center`}>
                        <Image
                          source={{
                            uri: "https://randomuser.me/api/portraits/men/1.jpg",
                          }}
                          style={tw`w-6 h-6 rounded-full mr-2`}
                        />
                        <TextInput
                          style={tw`flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm`}
                          placeholder="Write a reply..."
                          value={replyText}
                          onChangeText={setReplyText}
                          autoFocus
                        />
                        <TouchableOpacity
                          onPress={() => handleReply(reply.id)}
                          style={tw`ml-2`}
                        >
                          <Text style={tw`text-blue-500 font-bold text-sm`}>
                            Post
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default CommentSection;
