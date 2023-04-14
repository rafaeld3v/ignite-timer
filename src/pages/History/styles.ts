import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th {
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${({ theme }) => theme["gray-100"]};
      background: ${({ theme }) => theme["gray-600"]};

      &:first-child {
        padding-left: 1.5rem;
        border-top-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;
        border-top-right-radius: 8px;
      }
    }

    td {
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};
      background: ${({ theme }) => theme["gray-700"]};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  red: "red-500",
  green: "green-500",
  yellow: "yellow-500",
} as const;

interface IStatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<IStatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 8px;
    background: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
  }
`;
