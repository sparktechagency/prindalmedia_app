import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

const TagManager = ({ newTag }) => {
  const [tags, setTags] = useState([]);

//   console.log(new);
  
  
  useEffect(() => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  }, [newTag]);

 
  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`font-bold text-base mb-2`}>Tagged with:</Text>

      <ScrollView horizontal contentContainerStyle={tw`flex-row flex-wrap gap-2`}>
        {tags.map((tag, index) => (
          <View
            key={index}
            style={tw`flex-row items-center px-3 py-1 border border-blue-500 rounded-full bg-gray-100`}
          >
            <Text style={tw`text-gray-600 mr-2`}>{tag}</Text>
            <Pressable onPress={() => removeTag(tag)}>
              <Text style={tw`text-gray-500 text-lg`}>×</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TagManager;
