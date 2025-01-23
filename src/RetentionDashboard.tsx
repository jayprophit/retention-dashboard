import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Type definition for retention data
interface RetentionDataItem {
  cohort?: string;
  month6?: number;
  totalUsers?: number;
}

const transformData = (rawData: RetentionDataItem[] = []) => {
  if (!Array.isArray(rawData)) {
    console.warn('Invalid data provided to RetentionDashboard');
    return [];
  }

  return rawData.map(item => ({
    name: item.cohort || 'Unknown',
    retention: Math.max(0, Number(item.month6) || 0),
    totalUsers: Math.max(0, Number(item.totalUsers) || 0)
  }));
};

const RetentionDashboard = ({ data = [], title = 'User Retention Analysis', loading = false }: { data?: RetentionDataItem[]; title?: string; loading?: boolean }) => {
  const [selectedMetric, setSelectedMetric] = useState('retention');
  
  const processedData = useMemo(() => transformData(data), [data]);

  if (loading) {
    return (
      <Card className="w-full max-w-4xl">
        <CardContent className="text-center p-6">Loading retention data...</CardContent>
      </Card>
    );
  }

  if (processedData.length === 0) {
    return (
      <Card className="w-full max-w-4xl">
        <CardContent className="text-center p-6">No retention data available</CardContent>
      </Card>
    );
  }

  const renderChart = () => {
    const chartConfig = {
      retention: {
        dataKey: 'retention',
        fill: '#3182ce',
        name: 'Retention Rate (%)'
      },
      totalUsers: {
        dataKey: 'totalUsers',
        fill: '#48bb78',
        name: 'Total Users'
      }
    }[selectedMetric];

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={processedData} aria-label={`${title} - ${chartConfig.name}`}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={chartConfig.dataKey} fill={chartConfig.fill} name={chartConfig.name} />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Card className="w-full max-w-4xl shadow-lg" aria-label={title}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {title}
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retention">Retention Rate</SelectItem>
              <SelectItem value="totalUsers">Total Users</SelectItem>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>{renderChart()}</CardContent>
    </Card>
  );
};

export default RetentionDashboard;