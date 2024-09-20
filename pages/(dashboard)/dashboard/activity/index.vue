<script setup lang="ts">


definePageMeta({
  title: 'Activity Log',
  description: 'Activity Log',
  layout: 'dashboard',
});
import { ref, onMounted } from 'vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Settings,
  LogOut,
  UserPlus,
  Lock,
  UserCog,
  AlertCircle,
  UserMinus,
  Mail,
  CheckCircle,
  type LucideIcon,
} from 'lucide-vue-next';
import { ActivityType } from '@/lib/db/schema';
import { getActivityLogs } from '@/lib/db/queries';

const iconMap: Record<ActivityType, LucideIcon> = {
  [ActivityType.SIGN_UP]: UserPlus,
  [ActivityType.SIGN_IN]: UserCog,
  [ActivityType.SIGN_OUT]: LogOut,
  [ActivityType.UPDATE_PASSWORD]: Lock,
  [ActivityType.DELETE_ACCOUNT]: UserMinus,
  [ActivityType.UPDATE_ACCOUNT]: Settings,
  [ActivityType.CREATE_TEAM]: UserPlus,
  [ActivityType.REMOVE_TEAM_MEMBER]: UserMinus,
  [ActivityType.INVITE_TEAM_MEMBER]: Mail,
  [ActivityType.ACCEPT_INVITATION]: CheckCircle,
};

const logs = ref<any>([]);

const getRelativeTime = (date: Date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return date.toLocaleDateString();
};

const formatAction = (action: ActivityType): string => {
  switch (action) {
    case ActivityType.SIGN_UP:
      return 'You signed up';
    case ActivityType.SIGN_IN:
      return 'You signed in';
    case ActivityType.SIGN_OUT:
      return 'You signed out';
    case ActivityType.UPDATE_PASSWORD:
      return 'You changed your password';
    case ActivityType.DELETE_ACCOUNT:
      return 'You deleted your account';
    case ActivityType.UPDATE_ACCOUNT:
      return 'You updated your account';
    case ActivityType.CREATE_TEAM:
      return 'You created a new team';
    case ActivityType.REMOVE_TEAM_MEMBER:
      return 'You removed a team member';
    case ActivityType.INVITE_TEAM_MEMBER:
      return 'You invited a team member';
    case ActivityType.ACCEPT_INVITATION:
      return 'You accepted an invitation';
    default:
      return 'Unknown action occurred';
  }
};

onMounted(async () => {
    logs.value = 
[
    {
        id: 1,
        action: ActivityType.SIGN_UP,
        timestamp: new Date().toISOString(),
        ipAddress: '192.168.1.1',
    },
    {
        id: 2,
        action: ActivityType.SIGN_IN,
        timestamp: new Date(Date.now() - 60000).toISOString(), // 1 minute ago
        ipAddress: '192.168.1.2',
    },
    {
        id: 3,
        action: ActivityType.UPDATE_PASSWORD,
        timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
        ipAddress: '192.168.1.3',
    },
    {
        id: 4,
        action: ActivityType.DELETE_ACCOUNT,
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        ipAddress: '192.168.1.4',
    },
];
//   logs.value = await getActivityLogs();
});
</script>

<template>
  <section class="flex-1 p-4 lg:p-8">
    <h1 class="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
      Activity Log
    </h1>
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul v-if="logs.length > 0" class="space-y-4">
          <li
            v-for="log in logs"
            :key="log.id"
            class="flex items-center space-x-4"
          >
            <div class="bg-orange-100 rounded-full p-2">
              <component :is="iconMap[log.action as ActivityType] || Settings" class="w-5 h-5 text-orange-600" />
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">
                {{ formatAction(log.action) }}
                <span v-if="log.ipAddress"> from IP {{ log.ipAddress }}</span>
              </p>
              <p class="text-xs text-gray-500">
                {{ getRelativeTime(new Date(log.timestamp)) }}
              </p>
            </div>
          </li>
        </ul>
        <div v-else class="flex flex-col items-center justify-center text-center py-12">
          <AlertCircle class="h-12 w-12 text-orange-500 mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            No activity yet
          </h3>
          <p class="text-sm text-gray-500 max-w-sm">
            When you perform actions like signing in or updating your account, they'll appear here.
          </p>
        </div>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
/* Add any scoped styles here */
</style>