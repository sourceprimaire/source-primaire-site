#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
archive_dir="$project_dir/archive/squarespace/assets"

mkdir -p "$archive_dir/editions/summer-24"
mkdir -p "$archive_dir/editions/neighbors"
mkdir -p "$archive_dir/editions/pss01"
mkdir -p "$archive_dir/editions/ce-qui-reste"
mkdir -p "$archive_dir/pages"

download() {
  local target="$1"
  local url="$2"

  curl --fail --location --silent --show-error "$url" --output "$archive_dir/$target"
}

download "pages/recherche.webp" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/1e068725-8d44-4a88-aac5-a18926c98eaf/Temp-02.jpg?format=1500w"
download "pages/a-propos.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/59f2d85e-6449-4701-b75a-b96a6d1d5a91/Temp-03.jpg?format=1500w"

download "editions/summer-24/cover.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/6e44b9a7-b799-419b-9f61-8b05bf366563/Summer+24_Zine_00.jpg?format=2500w"
download "editions/summer-24/spread-01.webp" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/84ee2092-05d7-4db8-a314-0777eda7e300/Summer+24_Zine_01.jpg?format=2500w"
download "editions/summer-24/spread-02.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/df0b97ac-e2f0-4c2b-8318-81bd151b5d2e/Summer+24_Zine_02.jpg?format=2500w"
download "editions/summer-24/spread-03.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/5e9bfbfb-0536-4394-871e-976d713db2f2/Summer+24_Zine_03.jpg?format=2500w"

download "editions/neighbors/cover.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/8aacddda-ef56-4985-a63d-0ad37710ed5b/Neighbors-00.jpg?format=2500w"
download "editions/neighbors/spread-01.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/6e78ad7e-7b9b-4257-886c-63e759cdf6b6/Neighbors-01.jpg?format=2500w"
download "editions/neighbors/spread-02.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/6bfed257-3ae1-4517-8f65-327c0a066c78/Neighbors-02.jpg?format=2500w"

download "editions/pss01/cover.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/35e16d0d-9b73-4bc9-89d7-7c57b1aa82bd/PSS01-000.jpg?format=2500w"
download "editions/pss01/spread-01.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/2b08fd31-013a-44a8-86ba-028251374c99/PSS01-01+copy.jpg?format=2500w"
download "editions/pss01/spread-02.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/41f2bae6-9924-41b6-a554-cbf90105196f/PSS01-02.jpg?format=2500w"
download "editions/pss01/spread-03.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/1f5f6f98-edc5-49ea-892b-0e0bf545482b/PSS01-03.jpg?format=2500w"

download "editions/ce-qui-reste/cover.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/9059e7e7-3877-4fcd-ae6c-dc44d0f5fc16/MEP-01.jpg?format=2500w"
download "editions/ce-qui-reste/spread-01.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/3c5e4aec-7f1a-4784-926c-06faf5f423fa/MEP-02.jpg?format=2500w"
download "editions/ce-qui-reste/spread-02.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/37d8bb38-7202-4d23-ac57-993aa3c23ca6/MEP-03.jpg?format=2500w"
download "editions/ce-qui-reste/detail-03.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/d24fd559-76c6-428d-9844-7ce0aabb15e1/M3.jpg?format=1500w"
download "editions/ce-qui-reste/detail-07.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/3d997e74-faff-48ff-9233-91bac2e8ba94/M7.jpg?format=1500w"
download "editions/ce-qui-reste/detail-04.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/35022632-b46d-446e-8250-f31bde9ef8e2/M4.jpg?format=1500w"
download "editions/ce-qui-reste/detail-08.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/cc44a06a-3008-4a97-8adb-7256bf1078cf/M8.jpg?format=1500w"
download "editions/ce-qui-reste/detail-01.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/cfc208c3-8ed1-478d-a43e-655de9063c0a/M1.jpg?format=1500w"
download "editions/ce-qui-reste/detail-05.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/041c2fc4-4260-4e88-83d6-8f6888878e40/M5.jpg?format=1500w"
download "editions/ce-qui-reste/detail-02.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/2f744915-c84c-406f-87ee-b3f95ece1296/M2.jpg?format=1500w"
download "editions/ce-qui-reste/detail-06.jpg" "https://images.squarespace-cdn.com/content/v1/6a462d9ba05e9323ab6bf1a8/167bb00d-c108-429b-bff2-80f929220788/M6.jpg?format=1500w"

find "$archive_dir" -type f -print | sort
