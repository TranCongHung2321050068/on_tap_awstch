const examsData = {
    // ĐỀ 1: AWS PRACTITIONER 1 (20 CÂU)
    1: [
        {
            q: "Câu hỏi 1: Phát biểu nào sau đây là một ưu điểm của mô hình dịch vụ điện toán đám mây Nền tảng như một dịch vụ (PaaS)?",
            options: [
                "PaaS giống nhất với các mô hình tại chỗ (on-premises) truyền thống đối với các tài nguyên CNTT.",
                "PaaS cung cấp mức độ kiểm soát cao nhất đối với các tài nguyên CNTT.",
                "PaaS làm giảm nhu cầu xử lý triển khai ứng dụng.",
                "PaaS giúp tránh được nhu cầu phải quản lý các hệ điều hành."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 2: Điện toán đám mây cải thiện khả năng cấp phát tài nguyên của doanh nghiệp nhằm đáp ứng nhu cầu năng lực như thế nào so với điện toán tại chỗ (on-premises)?",
            options: [
                "Tài nguyên đám mây có thể được khóa ở cấp độ tài nguyên.",
                "Tài nguyên đám mây có thể dự báo được chi phí.",
                "Tài nguyên đám mây có thể trải qua các đỉnh và đáy trong quá trình sử dụng.",
                "Tài nguyên đám mây có thể tự động tăng hoặc giảm quy mô tùy theo nhu cầu."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 3: Phát biểu nào sau đây mô tả chính xác về mô hình tính giá của AWS?",
            options: [
                "Các công ty phải ký hợp đồng dài hạn để chỉ trả tiền cho những gì họ sử dụng.",
                "Giảm giá theo khối lượng sử dụng có sẵn khi mức độ sử dụng tăng lên (đối với một số dịch vụ).",
                "Các công ty có thể đặt trước dung lượng cho một số dịch vụ, nhưng điều đó không ảnh hưởng đến chi phí.",
                "Truyền dữ liệu ra ngoài (outbound data transfer) không bị tính phí."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 4: Một Chuyên gia Điện toán Đám mây (Cloud Practitioner) muốn trực quan hóa chi phí AWS của họ theo từng loại EC2 instance trong 3 tháng qua. Họ nên sử dụng công cụ hoặc tính năng AWS nào?",
            options: [
                "AWS Cost Explorer",
                "Trang hóa đơn AWS (AWS Bills page)",
                "Công cụ tính giá AWS (AWS Pricing Calculator)",
                "AWS Budgets"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 5: Phát biểu nào sau đây về các vị trí biên (edge locations) là đúng?",
            options: [
                "Amazon CloudFront sử dụng các vị trí biên và bộ nhớ tạm vùng (Regional edge caches) để phân phối nội dung với độ trễ thấp hơn.",
                "Bộ nhớ tạm vùng được sử dụng để lưu tạm dữ liệu được cập nhật thường xuyên và phải làm mới liên tục.",
                "Các điểm hiện diện AWS (AWS points of presence) cung cấp hai đến ba vị trí biên cho mỗi Region.",
                "Mạng lưới toàn cầu của AWS bao gồm một số lượng lớn bộ nhớ tạm vùng và một số lượng nhỏ các vị trí biên để phân phối nội dung tới người dùng."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 6: Những phát biểu nào sau đây về các chính sách Quản lý Truy cập và Định danh AWS (IAM) là chính xác? (Chọn HAI.)",
            options: [
                "Các chính sách dựa trên tài nguyên (Resource-based policies) cho phép truy cập theo mặc định.",
                "Các chính sách dựa trên định danh (Identity-based policies) được gán cho người dùng, nhóm hoặc vai trò (user, group, role).",
                "Các chính sách dựa trên tài nguyên (Resource-based policies) được gán cho người dùng, nhóm hoặc vai trò.",
                "Danh sách kiểm soát truy cập (ACL) là một dạng chính sách dựa trên tài nguyên.",
                "Các chính sách dựa trên định danh chỉ có thể được gán cho một đối tượng duy nhất."
            ],
            correct: [1, 3]
        },
        {
            q: "Câu hỏi 7: Kịch bản nào sau đây mô tả trường hợp sử dụng phù hợp cho AWS CloudTrail?",
            options: [
                "Một quản trị viên hệ thống muốn bảo vệ ứng dụng web của họ khỏi các cuộc tấn công từ chối dịch vụ (DoS).",
                "Một nhà phát triển muốn kiểm soát đăng nhập của người dùng vào trang web của họ.",
                "Một quản trị viên tài khoản muốn kiểm soát tập trung quyền truy cập cho các nhóm tài khoản.",
                "Một quản trị viên tài khoản muốn có khả năng theo dõi hoạt động của người dùng trên tài khoản của họ."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 8: Một quản trị viên mạng muốn chạy ứng dụng thương mại điện tử trên đám mây riêng ảo (VPC). Bước nào là một phần trong việc thiết lập VPC? (Chọn HAI.)",
            options: [
                "Tạo bảng tuyến đường chính (main route table).",
                "Gán VPC vào một nhóm bảo mật (security group).",
                "Xác định dải địa chỉ IP cho VPC.",
                "Tạo các mạng con riêng tư (private subnet) và công khai (public subnet).",
                "Xóa tuyến đường cục bộ (local route) trong bảng tuyến đường."
            ],
            correct: [2, 3]
        },
        {
            q: "Câu hỏi 9: Phát biểu nào sau đây mô tả chính xác về Mạng phân phối nội dung (CDN)?",
            options: [
                "CDN giúp tăng tốc độ phân giải tên miền cho các máy chủ ứng dụng.",
                "CDN là một nhóm các máy chủ theo Vùng (Regional).",
                "CDN tạo ra các kết nối nhanh giữa các máy chủ gốc (origin servers).",
                "CDN lưu trữ tạm thời (cache) các tệp được yêu cầu thường xuyên."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 10: Một công ty cần chạy một đoạn mã ngắn mỗi khi có tệp mới được thêm vào Amazon S3 bucket. Tùy chọn tính toán nào đáp ứng nhu cầu với ít công sức cấp phát tài nguyên nhất?",
            options: [
                "Thiết lập đoạn mã chạy trong một container và triển khai container đó trên Amazon Elastic Container Service (Amazon ECS).",
                "Tạo một hàm AWS Lambda để chạy đoạn mã bất cứ khi nào có tệp mới được thêm vào bucket.",
                "Thiết lập một Amazon EC2 instance nhỏ chạy mã để kiểm tra các tệp tải lên mới vào bucket và chạy đoạn mã.",
                "Viết một công việc xử lý theo lô (batch job) để chạy đoạn mã trên tất cả các tệp mới qua đêm khi có ít sự cạnh tranh tài nguyên. Chạy công việc theo lô trên Spot Instances."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 11: Một công ty có một bộ công việc xử lý dữ liệu lớn (big data) trong Amazon Simple Queue Service (Amazon SQS) cần nhiều năng lực tính toán. Mô hình tính giá Amazon EC2 instance nào đáp ứng nhu cầu với chi phí thấp nhất có thể?",
            options: [
                "Reserved Instance (Instance đặt trước)",
                "Spot Instance",
                "Scheduled Reserved Instance (Instance đặt trước theo lịch)",
                "On-Demand Instance (Instance theo yêu cầu)"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 12: Kịch bản nào phù hợp với lưu trữ Amazon Elastic File System (Amazon EFS)?",
            options: [
                "Một công ty muốn lưu trữ một trang web.",
                "Một công ty cần cung cấp quyền đọc và ghi vào hệ thống tệp mạng (NFS) cho tất cả các Amazon EC2 instance trong đám mây riêng ảo (VPC) của mình.",
                "Một công ty muốn xây dựng một hồ dữ liệu (data lake) quy mô petabyte cho phân tích dữ liệu.",
                "Một công ty cần lưu trữ tệp tạm thời cho ứng dụng đang chạy trên Amazon EC2."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 13: Một công ty cần lưu trữ dữ liệu lâu dài. Họ cần dữ liệu có sẵn ngay lập tức, nhưng mô hình truy cập dữ liệu không thể dự đoán trước. Lớp lưu trữ Amazon S3 nào sẽ tối ưu chi phí nhất?",
            options: [
                "Amazon S3 One Zone-Infrequent Access",
                "Amazon S3 Intelligent-Tiering",
                "Amazon S3 Standard",
                "Amazon S3 Glacier"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 14: Kịch bản nào mô tả trường hợp sử dụng tốt cho lớp lưu trữ Amazon S3 Standard?",
            options: [
                "Chạy một cơ sở dữ liệu quan hệ",
                "Làm bộ lưu trữ EC2 instance store.",
                "Chia sẻ một hệ thống tệp NFS",
                "Lưu trữ hình ảnh của trang web"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 15: Một công ty có trang thương mại điện tử yêu cầu lưu trữ và truy xuất siêu dữ liệu (metadata) phi cấu trúc của khách hàng để hỗ trợ một trong các microservice của mình. Tùy chọn cơ sở dữ liệu nào phù hợp nhất để lưu trữ dữ liệu này?",
            options: [
                "Amazon Redshift",
                "Amazon DynamoDB",
                "Amazon RDS",
                "Amazon Aurora"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 16: Thuộc tính (attribute) trong bảng Amazon DynamoDB là gì?",
            options: [
                "Một phần tử dữ liệu được chia sẻ bởi tất cả các mục trong bảng",
                "Một khóa giúp định danh duy nhất một tập hợp các phần tử dữ liệu",
                "Một tập hợp các dữ liệu có liên quan",
                "Một phần tử dữ liệu không cần phải chia nhỏ ra thêm nữa"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 17: Phát biểu nào phản ánh nguyên tắc thiết kế của trụ cột Độ tin cậy (Reliability) trong Khung kiến trúc AWS Well-Architected?",
            options: [
                "Hạn chế tự động hóa khi cập nhật hạ tầng.",
                "Tăng quy mô chiều dọc (scale vertically) lên các loại instance lớn nhất mà ngân sách cho phép dựa trên dự đoán tốt nhất về dung lượng.",
                "Thay thế một tài nguyên lớn bằng nhiều tài nguyên nhỏ hơn và phân phối các yêu cầu trên các tài nguyên nhỏ này.",
                "Không triển khai mã lên môi trường thực tế (production) cho đến khi bạn chắc chắn rằng nó không thể thất bại."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 18: Phát biểu nào sau đây mô tả Khả năng sẵn sàng cao (High Availability)?",
            options: [
                "Đó là xác suất toàn bộ hệ thống của bạn sẽ hoạt động như mong đợi trong một khoảng thời gian xác định.",
                "Hệ thống có thể chịu đựng một mức độ suy giảm hiệu năng nhất định mà không bị ngừng hoạt động.",
                "Hệ thống có thể cung cấp chức năng dự kiến khi người dùng yêu cầu.",
                "Đó là thước đo tổng thời gian hoạt động chia cho số lần gặp sự cố."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 19: Một công ty có ứng dụng chạy trên hai Amazon EC2 instance. Họ muốn giảm dung lượng EC2 nhàn rỗi. Tải của ứng dụng rất khó dự báo và họ muốn giữ hiệu suất sử dụng CPU gần 40% trên tất cả các instance. Họ nên cấu hình loại Amazon EC2 Auto Scaling nào?",
            options: [
                "Scheduled scaling (Tự động mở rộng theo lịch)",
                "Manual scaling (Tự động mở rộng thủ công)",
                "Predictive scaling (Tự động mở rộng dự đoán)",
                "Dynamic scaling (Tự động mở rộng động)"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 20: Elastic Load Balancing (ELB) được sử dụng với Amazon EC2 Auto Scaling như thế nào? (Chọn HAI.)",
            options: [
                "ELB thực hiện kiểm tra sức khỏe (health checks) trên các Amazon EC2 instance mới được thêm vào nhóm Amazon EC2 Auto Scaling.",
                "ELB thiết lập số lượng instance tối thiểu và tối đa trong nhóm Amazon EC2 Auto Scaling.",
                "ELB kích hoạt sự kiện Amazon EC2 Auto Scaling khi đạt đến một ngưỡng nhất định.",
                "ELB tự động thêm các instance mới vào nhóm Amazon EC2 Auto Scaling khi tải đạt đến giới hạn định sẵn.",
                "ELB phân phối lưu lượng truy cập giữa các Amazon EC2 instance trong một nhóm Amazon EC2 Auto Scaling."
            ],
            correct: [0, 4]
        }
    ],

    // ĐỀ 2: AWS PRACTITIONER 2 (20 CÂU)
    2: [
        {
            q: "Câu hỏi 1: Phát biểu nào sau đây là một ưu điểm của mô hình dịch vụ điện toán đám mây Nền tảng như một dịch vụ (PaaS)?",
            options: [
                "PaaS giống nhất với các mô hình tại chỗ (on-premises) truyền thống đối với các tài nguyên CNTT.",
                "PaaS giúp tránh được nhu cầu phải quản lý các hệ điều hành.",
                "PaaS cung cấp mức độ kiểm soát cao nhất đối với các tài nguyên CNTT.",
                "PaaS làm giảm nhu cầu xử lý triển khai ứng dụng."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 2: Điện toán đám mây cải thiện khả năng cấp phát tài nguyên của doanh nghiệp nhằm đáp ứng nhu cầu năng lực như thế nào so với điện toán tại chỗ (on-premises)?",
            options: [
                "Tài nguyên đám mây có thể trải qua các đỉnh và đáy trong quá trình sử dụng.",
                "Tài nguyên đám mây có thể được khóa ở cấp độ tài nguyên.",
                "Tài nguyên đám mây có thể dự báo được chi phí.",
                "Tài nguyên đám mây có thể tự động tăng hoặc giảm quy mô tùy theo nhu cầu."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 3: Phát biểu nào sau đây mô tả chính xác cách khách hàng có thể sử dụng AWS Support?",
            options: [
                "Khách hàng được chỉ định một Quản lý Tài khoản Kỹ thuật (TAM) cho tất cả các gói AWS Support.",
                "Khách hàng nên liên hệ với bộ phận Support Concierge của họ để được hỗ trợ kỹ thuật nhanh chóng và hiệu quả.",
                "Khách hàng phải chọn một trong ba gói hỗ trợ: Basic Support, Business Support, và Enterprise Support.",
                "Khách hàng có thể nhận AWS Support cho cả các tài khoản thử nghiệm phi thực tế và các tài khoản thực tế quan trọng đối với hoạt động kinh doanh."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 4: Một Chuyên gia Điện toán Đám mây (Cloud Practitioner) muốn trực quan hóa chi phí AWS của họ theo từng loại EC2 instance trong 3 tháng qua. Họ nên sử dụng công cụ hoặc tính năng AWS nào?",
            options: [
                "Trang hóa đơn AWS (AWS Bills page)",
                "Công cụ tính giá AWS (AWS Pricing Calculator)",
                "AWS Budgets",
                "AWS Cost Explorer"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 5: Phát biểu nào sau đây về các vị trí biên (edge locations) là đúng?",
            options: [
                "Các điểm hiện diện AWS (AWS points of presence) cung cấp hai đến ba vị trí biên cho mỗi Region.",
                "Amazon CloudFront sử dụng các vị trí biên và bộ nhớ tạm vùng (Regional edge caches) để phân phối nội dung với độ trễ thấp hơn.",
                "Mạng lưới toàn cầu của AWS bao gồm một số lượng lớn bộ nhớ tạm vùng và một số lượng nhỏ các vị trí biên để phân phối nội dung tới người dùng.",
                "Bộ nhớ tạm vùng được sử dụng để lưu tạm dữ liệu được cập nhật thường xuyên và phải làm mới liên tục."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 6: Những phát biểu nào sau đây về trách nhiệm là chính xác dựa trên Mô hình trách nhiệm chia sẻ của AWS? (Chọn HAI.)",
            options: [
                "AWS chịu trách nhiệm quyết định dữ liệu nào cần mã hóa trong các Amazon S3 bucket của khách hàng.",
                "Khách hàng chịu trách nhiệm lắp đặt, bảo trì và thanh lý phần cứng mà họ sử dụng trong trung tâm dữ liệu AWS.",
                "Khách hàng chịu trách nhiệm quản lý dữ liệu người dùng của họ.",
                "AWS chịu trách nhiệm cấu hình các nhóm bảo mật (security groups).",
                "AWS chịu trách nhiệm về an ninh vật lý của các trung tâm dữ liệu."
            ],
            correct: [2, 4]
        },
        {
            q: "Câu hỏi 7: Một công ty phải xuất các báo cáo về bất kỳ sự thay đổi nào đối với các cài đặt Amazon EC2 instance của họ. Họ nên sử dụng dịch vụ AWS nào?",
            options: [
                "AWS Config",
                "Amazon CloudWatch",
                "AWS CloudTrail",
                "AWS Artifact"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 8: Tùy chọn nào sau đây mô tả một khả năng của Amazon Virtual Private Cloud (VPC)?",
            options: [
                "Chúng có thể thay đổi dải địa chỉ theo ý muốn sau khi được tạo.",
                "Chúng có thể được cấu hình như một phần cô lập về mặt vật lý của AWS Cloud.",
                "Chúng có thể trải rộng trên nhiều Availability Zone.",
                "Chúng có thể thuộc về nhiều AWS Region."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 9: Phát biểu nào sau đây mô tả chính xác về Mạng phân phối nội dung (CDN)?",
            options: [
                "CDN giúp tăng tốc độ phân giải tên miền cho các máy chủ ứng dụng.",
                "CDN là một nhóm các máy chủ theo Vùng (Regional).",
                "CDN tạo ra các kết nối nhanh giữa các máy chủ gốc (origin servers).",
                "CDN lưu trữ tạm thời (cache) các tệp được yêu cầu thường xuyên."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 10: Một công ty muốn toàn quyền kiểm soát cấu hình máy chủ, hệ điều hành (OS) và bộ phần mềm ứng dụng của mình. Họ nên chọn dịch vụ tính toán AWS nào?",
            options: [
                "Amazon EC2",
                "Amazon RDS",
                "AWS Lambda",
                "Amazon Elastic Container Service (Amazon ECS)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 11: Một nhà phát triển cần bộ lưu trữ khối (block storage) tạm thời cho dữ liệu bộ nhớ đệm (cache) trên một Amazon EC2 instance. Họ nên chọn tùy chọn nào?",
            options: [
                "Amazon EC2 instance store",
                "Amazon Elastic File System (Amazon EFS)",
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon S3"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 12: Phát biểu nào sau đây về Amazon Elastic Block Store (Amazon EBS) là đúng?",
            options: [
                "Các ổ đĩa Amazon EBS không được khuyến nghị cho bộ lưu trữ yêu cầu cập nhật thường xuyên.",
                "Các ổ đĩa Amazon EBS tự động được nhân bản (replicate) trên nhiều Availability Zone.",
                "Các ổ đĩa Amazon EBS tồn tại độc lập với các Amazon EC2 instance mà chúng được gắn vào.",
                "Các ổ đĩa Amazon EBS không thể thay đổi kích thước."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 13: Một công ty tải lên các biểu mẫu PDF lên Amazon S3 và cần lưu giữ trong 1 năm. Các biểu mẫu này hiếm khi được truy cập sau 1 tuần, nhưng phải sẵn sàng trong vòng 1 ngày khi được yêu cầu. Chính sách vòng đời (lifecycle policy) nào là tối ưu chi phí nhất cho nhu cầu của họ?",
            options: [
                "Chuyển đối tượng từ Amazon S3 Standard sang Amazon S3 One Zone-Infrequent Access sau 7 ngày. Xóa các đối tượng sau 365 ngày.",
                "Chuyển đối tượng từ Amazon Standard-Infrequent Access sang Amazon S3 Standard sau 1 tuần.",
                "Chuyển đối tượng từ Amazon S3 Standard sang Amazon S3 Glacier sau 7 ngày. Xóa chúng sau 365 ngày.",
                "Chuyển đối tượng từ Amazon S3 Standard sang Amazon S3 Standard-Infrequent Access sau 7 ngày."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 14: Kịch bản nào mô tả trường hợp sử dụng tốt cho lớp lưu trữ Amazon S3 Standard?",
            options: [
                "Chia sẻ một hệ thống tệp NFS",
                "Chạy một cơ sở dữ liệu quan hệ",
                "Lưu trữ hình ảnh của trang web",
                "Làm bộ lưu trữ EC2 instance store."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 15: Tính năng nào của Amazon RDS mà một công ty nên cấu hình để bật khả năng sẵn sàng cao (high availability)?",
            options: [
                "Triển khai Multi-AZ (Multi-AZ deployment)",
                "Mã hóa bằng các khóa AWS Key Management Service (AWS KMS)",
                "Lưu trữ Provisioned IOPS",
                "Triển khai trên Đám mây riêng ảo (VPC deployment)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 16: Thuộc tính (attribute) trong bảng Amazon DynamoDB là gì?",
            options: [
                "Một phần tử dữ liệu được chia sẻ bởi tất cả các mục trong bảng",
                "Một phần tử dữ liệu không cần phải chia nhỏ ra thêm nữa",
                "Một khóa giúp định danh duy nhất một tập hợp các phần tử dữ liệu",
                "Một tập hợp các dữ liệu có liên quan"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 17: AWS Trusted Advisor hỗ trợ một công ty mới bắt đầu sử dụng AWS như thế nào?",
            options: [
                "AWS Trusted Advisor ngăn chặn truy cập vào các tài nguyên có quyền hạn quá rộng.",
                "AWS Trusted Advisor cung cấp các khuyến nghị về việc cấu hình tài nguyên AWS của bạn.",
                "AWS Trusted Advisor cung cấp các khuyến nghị về việc di chuyển tài nguyên tại chỗ (on-premises) lên đám mây.",
                "AWS Trusted Advisor tự động tăng giới hạn dịch vụ (quotas) nếu bạn gần đạt đến giới hạn."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 18: Phát biểu nào sau đây mô tả Khả năng sẵn sàng cao (High Availability)?",
            options: [
                "Đó là xác suất toàn bộ hệ thống của bạn sẽ hoạt động như mong đợi trong một khoảng thời gian xác định.",
                "Hệ thống có thể chịu đựng một mức độ suy giảm hiệu năng nhất định mà không bị ngừng hoạt động.",
                "Hệ thống có thể cung cấp chức năng dự kiến khi người dùng yêu cầu.",
                "Đó là thước đo tổng thời gian hoạt động chia cho số lần gặp sự cố."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 19: Những thông tin nào BẮT BUỘC phải được cấu hình cho các Amazon EC2 instance sẽ là một phần của nhóm Amazon EC2 Auto Scaling? (Chọn HAI.)",
            options: [
                "Dung lượng ổ đĩa lưu trữ (Storage volume)",
                "Các chỉ số nhóm Amazon EC2 Auto Scaling (Auto Scaling group metrics)",
                "ID của một Amazon Machine Image (AMI)",
                "Danh sách kiểm soát truy cập mạng (Network ACL)",
                "Loại Amazon EC2 instance (Amazon EC2 instance type)"
            ],
            correct: [2, 4]
        },
        {
            q: "Câu hỏi 20: Elastic Load Balancing (ELB) được sử dụng với Amazon EC2 Auto Scaling như thế nào? (Chọn HAI.)",
            options: [
                "ELB thực hiện kiểm tra sức khỏe (health checks) trên các Amazon EC2 instance mới được thêm vào nhóm Amazon EC2 Auto Scaling.",
                "ELB tự động thêm các instance mới vào nhóm Amazon EC2 Auto Scaling khi tải đạt đến giới hạn định sẵn.",
                "ELB thiết lập số lượng instance tối thiểu và tối đa trong nhóm Amazon EC2 Auto Scaling.",
                "ELB phân phối lưu lượng truy cập giữa các Amazon EC2 instance trong một nhóm Amazon EC2 Auto Scaling.",
                "ELB kích hoạt sự kiện Amazon EC2 Auto Scaling khi đạt đến một ngưỡng nhất định."
            ],
            correct: [0, 3]
        }
    ],

    // ĐỀ 3: AWS PRACTITIONER 3 (20 CÂU)
    3: [
        {
            q: "Câu hỏi 1: Những ưu điểm nào của điện toán đám mây đối với một công ty chuyển đổi từ mô hình điện toán tại chỗ (on-premises) truyền thống? (Chọn HAI.)",
            options: [
                "Các tài nguyên có thể được tạo, tăng quy mô, giảm quy mô hoặc hủy bỏ dựa trên nhu cầu.",
                "Tất cả các bản quyền máy chủ tại chỗ có thể dễ dàng chuyển giao và quản lý tập trung trên đám mây.",
                "Công ty có thể đầu tư nhiều hơn vào chi phí cố định (vốn) và giảm chi phí biến đổi của họ.",
                "Công ty có thể tập trung ít hơn vào hạ tầng và tập trung nhiều hơn vào việc tạo sự khác biệt cho doanh nghiệp.",
                "Các đội ngũ CNTT có thể đưa ra quyết định về dung lượng trước khi triển khai ứng dụng để luôn có dung lượng dư thừa."
            ],
            correct: [0, 3]
        },
        {
            q: "Câu hỏi 2: Điện toán đám mây cải thiện khả năng cấp phát tài nguyên của doanh nghiệp nhằm đáp ứng nhu cầu năng lực như thế nào so với điện toán tại chỗ (on-premises)?",
            options: [
                "Tài nguyên đám mây có thể tự động tăng hoặc giảm quy mô tùy theo nhu cầu.",
                "Tài nguyên đám mây có thể trải qua các đỉnh và đáy trong quá trình sử dụng.",
                "Tài nguyên đám mây có thể dự báo được chi phí.",
                "Tài nguyên đám mây có thể được khóa ở cấp độ tài nguyên."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 3: Phát biểu nào sau đây mô tả chính xác cách khách hàng có thể sử dụng AWS Support?",
            options: [
                "Khách hàng phải chọn một trong ba gói hỗ trợ: Basic Support, Business Support, và Enterprise Support.",
                "Khách hàng có thể nhận AWS Support cho cả các tài khoản thử nghiệm phi thực tế và các tài khoản thực tế quan trọng đối với hoạt động kinh doanh.",
                "Khách hàng được chỉ định một Quản lý Tài khoản Kỹ thuật (TAM) cho tất cả các gói AWS Support.",
                "Khách hàng nên liên hệ với bộ phận Support Concierge của họ để được hỗ trợ kỹ thuật nhanh chóng và hiệu quả."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 4: Một Chuyên gia Điện toán Đám mây (Cloud Practitioner) muốn trực quan hóa chi phí AWS của họ theo từng loại EC2 instance trong 3 tháng qua. Họ nên sử dụng công cụ hoặc tính năng AWS nào?",
            options: [
                "Công cụ tính giá AWS (AWS Pricing Calculator)",
                "AWS Budgets",
                "Trang hóa đơn AWS (AWS Bills page)",
                "AWS Cost Explorer"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 5: Phát biểu nào sau đây về các AWS Region là đúng?",
            options: [
                "Tất cả các tài khoản AWS đều có thể truy cập tất cả các AWS Region.",
                "Sử dụng một Region càng gần người dùng càng tốt có thể giúp giảm độ trễ.",
                "Dữ liệu được lưu trữ trong một AWS Region không phải tuân theo các yêu cầu tuân thủ địa lý.",
                "Tất cả các Region có sẵn đều được bật theo mặc định trong một tài khoản AWS."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 6: Một quản trị viên tài khoản AWS muốn cấp quyền truy cập tạm thời giữa các tài khoản (cross-account) cho phép người dùng bên ngoài truy cập các tài nguyên cụ thể trong tài khoản của họ. Hành động nào sẽ phù hợp với thực tiễn tốt nhất về việc sử dụng các phiên làm việc tạm thời?",
            options: [
                "Tạo một nhóm AWS Identity and Access Management (IAM), cấp quyền tài nguyên cho nhóm, sau đó thêm người dùng IAM vào nhóm.",
                "Tạo một vai trò AWS Identity and Access Management (IAM role) mà người dùng bên ngoài có thể đảm nhận (assume) và cấp quyền cho vai trò đó truy cập các tài nguyên cụ thể.",
                "Tạo một chính sách AWS Identity and Access Management (IAM policy) cho phép người dùng bên ngoài truy cập các tài nguyên cụ thể.",
                "Tạo một tài khoản người dùng AWS Identity and Access Management (IAM user) mới cho từng người dùng cần truy cập."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 7: Kịch bản nào sau đây mô tả trường hợp sử dụng phù hợp cho AWS CloudTrail?",
            options: [
                "Một nhà phát triển muốn kiểm soát đăng nhập của người dùng vào trang web của họ.",
                "Một quản trị viên tài khoản muốn có khả năng theo dõi hoạt động của người dùng trên tài khoản của họ.",
                "Một quản trị viên tài khoản muốn kiểm soát tập trung quyền truy cập cho các nhóm tài khoản.",
                "Một quản trị viên hệ thống muốn bảo vệ ứng dụng web của họ khỏi các cuộc tấn công từ chối dịch vụ (DoS)."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 8: Tùy chọn nào sau đây mô tả một khả năng của Amazon Virtual Private Cloud (VPC)?",
            options: [
                "Chúng có thể thuộc về nhiều AWS Region.",
                "Chúng có thể được cấu hình như một phần cô lập về mặt vật lý của AWS Cloud.",
                "Chúng có thể trải rộng trên nhiều Availability Zone.",
                "Chúng có thể thay đổi dải địa chỉ theo ý muốn sau khi được tạo."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 9: Yêu cầu nào gợi ý việc cấu hình Amazon Route 53 với định tuyến độ trễ (latency routing)?",
            options: [
                "Một công ty muốn định tuyến lưu lượng truy cập đến Region cung cấp trải nghiệm nhanh nhất dựa trên đo lường hiệu năng.",
                "Một công ty muốn định tuyến lưu lượng truy cập chỉ đến các vị trí mà họ có quyền phân phối.",
                "Một công ty muốn thực hiện thử nghiệm A/B và định tuyến lưu lượng truy cập đến các vị trí khác nhau dựa trên phần trăm lưu lượng.",
                "Một công ty muốn phát hiện sự cố gián đoạn trang web và tự động chuyển hướng khách hàng đến một vị trí hoạt động bình thường."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 10: Một công ty cần chạy một đoạn mã ngắn mỗi khi có tệp mới được thêm vào Amazon S3 bucket. Tùy chọn tính toán nào đáp ứng nhu cầu với ít công sức cấp phát tài nguyên nhất?",
            options: [
                "Thiết lập đoạn mã chạy trong một container và triển khai container đó trên Amazon Elastic Container Service (Amazon ECS).",
                "Tạo một hàm AWS Lambda để chạy đoạn mã bất cứ khi nào có tệp mới được thêm vào bucket.",
                "Thiết lập một Amazon EC2 instance nhỏ chạy mã để kiểm tra các tệp tải lên mới vào bucket và chạy đoạn mã.",
                "Viết một công việc xử lý theo lô (batch job) để chạy đoạn mã trên tất cả các tệp mới qua đêm khi có ít sự cạnh tranh tài nguyên. Chạy công việc theo lô trên Spot Instances."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 11: Một nhà phát triển cần bộ lưu trữ khối (block storage) tạm thời cho dữ liệu bộ nhớ đệm (cache) trên một Amazon EC2 instance. Họ nên chọn tùy chọn nào?",
            options: [
                "Amazon EC2 instance store",
                "Amazon Elastic File System (Amazon EFS)",
                "Amazon S3",
                "Amazon Elastic Block Store (Amazon EBS)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 12: Kịch bản nào phù hợp với lưu trữ Amazon Elastic File System (Amazon EFS)?",
            options: [
                "Một công ty muốn lưu trữ một trang web.",
                "Một công ty muốn xây dựng một hồ dữ liệu (data lake) quy mô petabyte cho phân tích dữ liệu.",
                "Một công ty cần lưu trữ tệp tạm thời cho ứng dụng đang chạy trên Amazon EC2.",
                "Một công ty cần cung cấp quyền đọc và ghi vào hệ thống tệp mạng (NFS) cho tất cả các Amazon EC2 instance trong đám mây riêng ảo (VPC) của mình."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 13: Phát biểu nào sau đây về các dịch vụ lưu trữ AWS là chính xác?",
            options: [
                "Để truy cập Amazon Elastic File System (Amazon EFS), hệ thống tệp phải được gắn (mount) trên một Amazon EC2 instance trong đám mây riêng ảo (VPC) của bạn.",
                "Amazon EC2 instance store cung cấp bộ lưu trữ bền vững cho Amazon EC2 instance mà nó được gắn vào, nhưng nó không khả dụng cho các EC2 instance khác.",
                "Amazon EC2 instance store là lựa chọn tốt để chạy xử lý dữ liệu lớn (big data) và phân tích.",
                "Các ổ đĩa Amazon Elastic Block Store (Amazon EBS) cung cấp bộ lưu trữ khối tạm thời cho Amazon EC2, nhưng chúng không tồn tại khi EC2 instance bị dừng."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 14: Phát biểu nào sau đây về bảo mật của Amazon S3 Glacier là chính xác?",
            options: [
                "Đối với tất cả các thao tác và tương tác với Amazon S3 Glacier, bạn có thể sử dụng AWS Management Console.",
                "Dữ liệu trong Amazon S3 Glacier là công khai theo mặc định.",
                "Mã hóa ứng dụng phải được khởi tạo trên các đối tượng lưu trữ trong Amazon S3 Glacier bằng AWS Management Console hoặc lập trình.",
                "Quyền truy cập vào Amazon S3 Glacier có thể được quản lý bằng các chính sách AWS Identity and Access Management (IAM policies)."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 15: Tính năng nào của Amazon RDS mà một công ty nên cấu hình để bật khả năng sẵn sàng cao (high availability)?",
            options: [
                "Triển khai trên Đám mây riêng ảo (VPC deployment)",
                "Triển khai Multi-AZ (Multi-AZ deployment)",
                "Lưu trữ Provisioned IOPS",
                "Mã hóa bằng các khóa AWS Key Management Service (AWS KMS)"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 16: Kịch bản nào mô tả tốt nhất trường hợp sử dụng cho Amazon Aurora?",
            options: [
                "Một công ty cần cơ sở dữ liệu để lưu trữ dữ liệu bán cấu trúc.",
                "Một công ty cần một kho dữ liệu (data warehouse) có thể truy vấn bằng các công cụ phân tích kinh doanh (BI) tiêu chuẩn.",
                "Một công ty cần một cơ sở dữ liệu tương thích với PostgreSQL có khả năng sẵn sàng cao.",
                "Một công ty muốn chạy cơ sở dữ liệu Oracle trên đám mây."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 17: Phát biểu nào phản ánh nguyên tắc thiết kế của trụ cột Độ tin cậy (Reliability) trong Khung kiến trúc AWS Well-Architected?",
            options: [
                "Hạn chế tự động hóa khi cập nhật hạ tầng.",
                "Thay thế một tài nguyên lớn bằng nhiều tài nguyên nhỏ hơn và phân phối các yêu cầu trên các tài nguyên nhỏ này.",
                "Không triển khai mã lên môi trường thực tế (production) cho đến khi bạn chắc chắn rằng nó không thể thất bại.",
                "Tăng quy mô chiều dọc (scale vertically) lên các loại instance lớn nhất mà ngân sách cho phép dựa trên dự đoán tốt nhất về dung lượng."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 18: Phát biểu nào sau đây mô tả Khả năng sẵn sàng cao (High Availability)?",
            options: [
                "Hệ thống có thể cung cấp chức năng dự kiến khi người dùng yêu cầu.",
                "Đó là xác suất toàn bộ hệ thống của bạn sẽ hoạt động như mong đợi trong một khoảng thời gian xác định.",
                "Hệ thống có thể chịu đựng một mức độ suy giảm hiệu năng nhất định mà không bị ngừng hoạt động.",
                "Đó là thước đo tổng thời gian hoạt động chia cho số lần gặp sự cố."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 19: Một công ty có ứng dụng chạy trên hai Amazon EC2 instance. Họ muốn giảm dung lượng EC2 nhàn rỗi. Tải của ứng dụng rất khó dự báo và họ muốn giữ hiệu suất sử dụng CPU gần 40% trên tất cả các instance. Họ nên cấu hình loại Amazon EC2 Auto Scaling nào?",
            options: [
                "Predictive scaling (Tự động mở rộng dự đoán)",
                "Scheduled scaling (Tự động mở rộng theo lịch)",
                "Dynamic scaling (Tự động mở rộng động)",
                "Manual scaling (Tự động mở rộng thủ công)"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 20: Phát biểu nào mô tả chính xác cách Amazon EC2 Auto Scaling được sử dụng?",
            options: [
                "Amazon EC2 Auto Scaling hữu ích cho khối lượng công việc động, không thể dự đoán nhưng không mang lại nhiều giá trị cho khối lượng công việc có thể dự đoán.",
                "Amazon EC2 Auto Scaling hữu ích cho các khối lượng công việc có thể dự đoán được.",
                "Kích thước của nhóm Amazon EC2 Auto Scaling sẽ tự động tăng giảm dựa trên cấu hình của nó và số lượng instance không thể điều chỉnh thủ công.",
                "Amazon EC2 Auto Scaling cho phép ứng dụng tự động thêm tài nguyên, nhưng không thể tự động giảm quy mô tài nguyên trở lại."
            ],
            correct: [1]
        }
    ],

    // ĐỀ 4: AWS PRACTITIONER 4 (17 CÂU)
    4: [
        {
            q: "Câu hỏi 1: Yêu cầu CNTT nào sẽ dẫn dắt một kiến trúc sư lựa chọn mô hình dịch vụ đám mây Hạ tầng như một dịch vụ (IaaS)?",
            options: [
                "Một công ty muốn duy trì mức độ linh hoạt cao nhất đối với các tài nguyên CNTT của mình.",
                "Một công ty muốn duy trì kiểm soát các ứng dụng của mình nhưng tránh duy trì máy chủ và hệ điều hành.",
                "Một công ty muốn sử dụng giải pháp email trên nền tảng web.",
                "Một công ty muốn chạy một instance được quản lý cho thị trường (marketplace)."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 2: Điện toán đám mây cải thiện khả năng cấp phát tài nguyên của doanh nghiệp nhằm đáp ứng nhu cầu năng lực như thế nào so với điện toán tại chỗ (on-premises)?",
            options: [
                "Tài nguyên đám mây có thể tự động tăng hoặc giảm quy mô tùy theo nhu cầu.",
                "Tài nguyên đám mây có thể dự báo được chi phí.",
                "Tài nguyên đám mây có thể được khóa ở cấp độ tài nguyên.",
                "Tài nguyên đám mây có thể trải qua các đỉnh và đáy trong quá trình sử dụng."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 3: Những phát biểu nào về cách một công ty sử dụng AWS Organizations là chính xác? (Chọn HAI.)",
            options: [
                "Một công ty chỉ có thể quản lý AWS Organizations thông qua AWS Management Console.",
                "Một công ty có thể hưởng lợi từ việc giảm giá theo khối lượng với hóa đơn tổng hợp (consolidated billing).",
                "Một công ty có thể sử dụng tính năng quản lý truy cập và định danh (IAM) tổng hợp của AWS Organizations để thay thế hệ thống IAM hiện có cho một tài khoản riêng lẻ.",
                "Một công ty có thể hợp nhất và quản lý tập trung nhiều tài khoản AWS.",
                "Một công ty có thể sử dụng AWS Organizations để tạo các nhóm bảo mật (security groups) kiểm soát truy cập vào tài nguyên."
            ],
            correct: [1, 3]
        },
        {
            q: "Câu hỏi 4: Một Chuyên gia Điện toán Đám mây (Cloud Practitioner) muốn trực quan hóa chi phí AWS của họ theo từng loại EC2 instance trong 3 tháng qua. Họ nên sử dụng công cụ hoặc tính năng AWS nào?",
            options: [
                "AWS Budgets",
                "Trang hóa đơn AWS (AWS Bills page)",
                "AWS Cost Explorer",
                "Công cụ tính giá AWS (AWS Pricing Calculator)"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 5: Mối quan hệ giữa AWS Region, Availability Zone và trung tâm dữ liệu (data center) là gì?",
            options: [
                "Mỗi Availability Zone bao gồm các trung tâm dữ liệu. Mỗi trung tâm dữ liệu trong một Availability Zone nằm ở một Region địa lý khác nhau.",
                "Mỗi Region có các vị trí được gọi là Availability Zone. Mỗi Availability Zone có các trung tâm dữ liệu.",
                "Mỗi Region có một tập hợp các trung tâm dữ liệu. Mỗi trung tâm dữ liệu tương ứng với một Availability Zone.",
                "Một tập hợp các trung tâm dữ liệu trong một khu vực địa lý tạo thành một Region. Các Availability Zone là kết nối giữa các Region."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 6: Những phát biểu nào sau đây về các chính sách Quản lý Truy cập và Định danh AWS (IAM) là chính xác? (Chọn HAI.)",
            options: [
                "Danh sách kiểm soát truy cập (ACL) là một dạng chính sách dựa trên tài nguyên.",
                "Các chính sách dựa trên tài nguyên (Resource-based policies) cho phép truy cập theo mặc định.",
                "Các chính sách dựa trên định danh chỉ có thể được gán cho một đối tượng duy nhất.",
                "Các chính sách dựa trên tài nguyên (Resource-based policies) được gán cho người dùng, nhóm hoặc vai trò.",
                "Các chính sách dựa trên định danh (Identity-based policies) được gán cho người dùng, nhóm hoặc vai trò."
            ],
            correct: [0, 4]
        },
        {
            q: "Câu hỏi 7: Kịch bản nào sau đây mô tả trường hợp sử dụng phù hợp cho AWS CloudTrail?",
            options: [
                "Một nhà phát triển muốn kiểm soát đăng nhập của người dùng vào trang web của họ.",
                "Một quản trị viên hệ thống muốn bảo vệ ứng dụng web của họ khỏi các cuộc tấn công từ chối dịch vụ (DoS).",
                "Một quản trị viên tài khoản muốn kiểm soát tập trung quyền truy cập cho các nhóm tài khoản.",
                "Một quản trị viên tài khoản muốn có khả năng theo dõi hoạt động của người dùng trên tài khoản của họ."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 8: Tùy chọn nào sau đây mô tả một khả năng của Amazon Virtual Private Cloud (VPC)?",
            options: [
                "Chúng có thể trải rộng trên nhiều Availability Zone.",
                "Chúng có thể được cấu hình như một phần cô lập về mặt vật lý của AWS Cloud.",
                "Chúng có thể thuộc về nhiều AWS Region.",
                "Chúng có thể thay đổi dải địa chỉ theo ý muốn sau khi được tạo."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 9: Nhóm bảo mật (security group) đóng vai trò gì trong việc quản lý truy cập vào các Amazon EC2 instance?",
            options: [
                "Nhóm bảo mật xác định các vai trò AWS Identity and Access Management (IAM) có thể truy cập instance.",
                "Nhóm bảo mật cung cấp một tập hợp các quy tắc để kiểm soát lưu lượng truy cập đến hoặc đi từ một instance.",
                "Nhóm bảo mật xác định các khóa công khai và riêng tư cần thiết để kết nối với Amazon EC2 instance.",
                "Nhóm bảo mật kiểm soát truy cập đầu vào đến mạng con (subnet) mà Amazon EC2 liên kết."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 10: Một công ty cần lưu trữ dữ liệu lâu dài. Họ cần dữ liệu có sẵn ngay lập tức, nhưng mô hình truy cập dữ liệu không thể dự đoán trước. Lớp lưu trữ Amazon S3 nào sẽ tối ưu chi phí nhất?",
            options: [
                "Amazon S3 One Zone-Infrequent Access",
                "Amazon S3 Standard",
                "Amazon S3 Intelligent-Tiering",
                "Amazon S3 Glacier"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 11: Một công ty cần lưu trữ hàng tỷ sự kiện nhỏ hàng ngày sẽ được sử dụng cho phân tích. Tùy chọn lưu trữ nào phù hợp nhất cho trường hợp sử dụng này?",
            options: [
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon Elastic Container Service (Amazon ECS)",
                "Amazon EC2 Instance store",
                "Amazon S3"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 12: Một công ty có trang thương mại điện tử yêu cầu lưu trữ và truy xuất siêu dữ liệu (metadata) phi cấu trúc của khách hàng để hỗ trợ một trong các microservice của mình. Tùy chọn cơ sở dữ liệu nào phù hợp nhất để lưu trữ dữ liệu này?",
            options: [
                "Amazon DynamoDB",
                "Amazon RDS",
                "Amazon Aurora",
                "Amazon Redshift"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 13: Kịch bản nào phù hợp cho Amazon Redshift?",
            options: [
                "Một công ty cần một kho dữ liệu (data warehouse) để hỗ trợ các ứng dụng phân tích.",
                "Một công ty cần một cơ sở dữ liệu quan hệ cho cơ sở dữ liệu giao dịch kinh doanh.",
                "Một công ty cần lưu trữ dung lượng lớn các tệp hình ảnh và video hỗn hợp.",
                "Một công ty cần một cơ sở dữ liệu để quản lý dữ liệu phi cấu trúc."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 14: Phát biểu nào phản ánh nguyên tắc thiết kế của trụ cột Độ tin cậy (Reliability) trong Khung kiến trúc AWS Well-Architected?",
            options: [
                "Không triển khai mã lên môi trường thực tế (production) cho đến khi bạn chắc chắn rằng nó không thể thất bại.",
                "Hạn chế tự động hóa khi cập nhật hạ tầng.",
                "Tăng quy mô chiều dọc (scale vertically) lên các loại instance lớn nhất mà ngân sách cho phép dựa trên dự đoán tốt nhất về dung lượng.",
                "Thay thế một tài nguyên lớn bằng nhiều tài nguyên nhỏ hơn và phân phối các yêu cầu trên các tài nguyên nhỏ này."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 15: Kịch bản nào nên được xử lý bằng Network Load Balancer?",
            options: [
                "Một giải pháp phải cân bằng tải hàng triệu yêu cầu mỗi giây trong khi duy trì độ trễ thấp.",
                "Một giải pháp phải cân bằng tải các yêu cầu gRPC đến.",
                "Một giải pháp phải định tuyến lưu lượng truy cập ở Lớp 7 của mô hình OSI (Open Systems Interconnection).",
                "Một giải pháp phải hỗ trợ định tuyến lưu lượng truy cập đến ứng dụng dạng container dựa trên nội dung của các yêu cầu đến."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 16: Elastic Load Balancing (ELB) được sử dụng với Amazon EC2 Auto Scaling như thế nào? (Chọn HAI.)",
            options: [
                "ELB thiết lập số lượng instance tối thiểu và tối đa trong nhóm Amazon EC2 Auto Scaling.",
                "ELB thực hiện kiểm tra sức khỏe (health checks) trên các Amazon EC2 instance mới được thêm vào nhóm Amazon EC2 Auto Scaling.",
                "ELB tự động thêm các instance mới vào nhóm Amazon EC2 Auto Scaling khi tải đạt đến giới hạn định sẵn.",
                "ELB kích hoạt sự kiện Amazon EC2 Auto Scaling khi đạt đến một ngưỡng nhất định.",
                "ELB phân phối lưu lượng truy cập giữa các Amazon EC2 instance trong một nhóm Amazon EC2 Auto Scaling."
            ],
            correct: [1, 4]
        },
        {
            q: "Câu hỏi 17: Phát biểu nào mô tả góc nhìn kinh doanh (business perspective) của Khung áp dụng đám mây AWS (AWS Cloud Adoption Framework)?",
            options: [
                "Các bên liên quan có thể sử dụng các chiều kiến trúc và mô hình để hiểu và truyền đạt bản chất của các hệ thống CNTT cũng như mối quan hệ của chúng.",
                "Các bên liên quan có thể đánh giá cấu trúc tổ chức và vai trò, các yêu cầu về kỹ năng và quy trình mới, đồng thời xác định các khoảng trống.",
                "Các bên liên quan có thể tập trung vào các kỹ năng và quy trình cần thiết để căn chỉnh chiến lược và mục tiêu CNTT với chiến lược và mục tiêu kinh doanh.",
                "Các bên liên quan có thể tạo một hồ sơ kinh doanh (business case) mạnh mẽ cho việc áp dụng đám mây và ưu tiên các sáng kiến áp dụng đám mây."
            ],
            correct: [3]
        }
    ],

    // ĐỀ 5: AWS PRACTITIONER 5 (20 CÂU)
    5: [
        {
            q: "Câu hỏi 1: Phát biểu nào mô tả góc nhìn kinh doanh (business perspective) của Khung áp dụng đám mây AWS (AWS Cloud Adoption Framework)?",
            options: [
                "Các bên liên quan có thể sử dụng các chiều kiến trúc và mô hình để hiểu và truyền đạt bản chất của các hệ thống CNTT cũng như mối quan hệ của chúng.",
                "Các bên liên quan có thể đánh giá cấu trúc tổ chức và vai trò, các yêu cầu về kỹ năng và quy trình mới, đồng thời xác định các khoảng trống.",
                "Các bên liên quan có thể tập trung vào các kỹ năng và quy trình cần thiết để căn chỉnh chiến lược và mục tiêu CNTT với chiến lược và mục tiêu kinh doanh.",
                "Các bên liên quan có thể tạo một hồ sơ kinh doanh (business case) mạnh mẽ cho việc áp dụng đám mây và ưu tiên các sáng kiến áp dụng đám mây."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 2: Điện toán đám mây cải thiện khả năng cấp phát tài nguyên của doanh nghiệp nhằm đáp ứng nhu cầu năng lực như thế nào so với điện toán tại chỗ (on-premises)?",
            options: [
                "Tài nguyên đám mây có thể tự động tăng hoặc giảm quy mô tùy theo nhu cầu.",
                "Tài nguyên đám mây có thể dự báo được chi phí.",
                "Tài nguyên đám mây có thể được khóa ở cấp độ tài nguyên.",
                "Tài nguyên đám mây có thể trải qua các đỉnh và đáy trong quá trình sử dụng."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 3: Phát biểu nào sau đây mô tả chính xác về mô hình tính giá của AWS?",
            options: [
                "Giảm giá theo khối lượng sử dụng có sẵn khi mức độ sử dụng tăng lên (đối với một số dịch vụ).",
                "Các công ty có thể đặt trước dung lượng cho một số dịch vụ, nhưng điều đó không ảnh hưởng đến chi phí.",
                "Truyền dữ liệu ra ngoài (outbound data transfer) không bị tính phí.",
                "Các công ty phải ký hợp đồng dài hạn để chỉ trả tiền cho những gì họ sử dụng."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 4: Những yếu tố nào được tính đến khi tính Tổng chi phí sở hữu (TCO) cho Đám mây AWS? (Chọn HAI.)",
            options: [
                "Số lượng máy chủ cần di chuyển lên đám mây",
                "Số lượng nhóm cần di chuyển lên đám mây",
                "Số lượng vai trò (roles) cần di chuyển lên đám mây",
                "Số lượng người dùng cần di chuyển lên đám mây",
                "Dung lượng lưu trữ cần di chuyển lên đám mây"
            ],
            correct: [0, 4]
        },
        {
            q: "Câu hỏi 5: Mối quan hệ giữa AWS Region, Availability Zone và trung tâm dữ liệu (data center) là gì?",
            options: [
                "Mỗi Region có các vị trí được gọi là Availability Zone. Mỗi Availability Zone có các trung tâm dữ liệu.",
                "Mỗi Region có một tập hợp các trung tâm dữ liệu. Mỗi trung tâm dữ liệu tương ứng với một Availability Zone.",
                "Một tập hợp các trung tâm dữ liệu trong một khu vực địa lý tạo thành một Region. Các Availability Zone là kết nối giữa các Region.",
                "Mỗi Availability Zone bao gồm các trung tâm dữ liệu. Mỗi trung tâm dữ liệu trong một Availability Zone nằm ở một Region địa lý khác nhau."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 6: Những phát biểu nào sau đây về các chính sách Quản lý Truy cập và Định danh AWS (IAM) là chính xác? (Chọn HAI.)",
            options: [
                "Các chính sách dựa trên tài nguyên (Resource-based policies) cho phép truy cập theo mặc định.",
                "Danh sách kiểm soát truy cập (ACL) là một dạng chính sách dựa trên tài nguyên.",
                "Các chính sách dựa trên định danh chỉ có thể được gán cho một đối tượng duy nhất.",
                "Các chính sách dựa trên tài nguyên (Resource-based policies) được gán cho người dùng, nhóm hoặc vai trò.",
                "Các chính sách dựa trên định danh (Identity-based policies) được gán cho người dùng, nhóm hoặc vai trò."
            ],
            correct: [1, 4]
        },
        {
            q: "Câu hỏi 7: Kịch bản nào sau đây mô tả trường hợp sử dụng phù hợp cho AWS CloudTrail?",
            options: [
                "Một quản trị viên tài khoản muốn có khả năng theo dõi hoạt động của người dùng trên tài khoản của họ.",
                "Một quản trị viên tài khoản muốn kiểm soát tập trung quyền truy cập cho các nhóm tài khoản.",
                "Một nhà phát triển muốn kiểm soát đăng nhập của người dùng vào trang web của họ.",
                "Một quản trị viên hệ thống muốn bảo vệ ứng dụng web của họ khỏi các cuộc tấn công từ chối dịch vụ (DoS)."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 8: Một quản trị viên mạng muốn cấu hình một mạng con công khai (public subnet) và định tuyến lưu lượng truy cập đầu vào và đầu ra đến và từ một Amazon EC2 instance trong mạng con công khai ra internet công cộng. Tính năng đám mây riêng ảo (VPC) nào họ nên sử dụng?",
            options: [
                "Chia sẻ VPC (VPC sharing)",
                "Danh sách kiểm soát truy cập mạng (Network ACL)",
                "An internet gateway (Cổng Internet)",
                "A network address translation (NAT) gateway (Cổng NAT)"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 9: Yêu cầu nào gợi ý việc cấu hình Amazon Route 53 với định tuyến độ trễ (latency routing)?",
            options: [
                "Một công ty muốn thực hiện thử nghiệm A/B và định tuyến lưu lượng truy cập đến các vị trí khác nhau dựa trên phần trăm lưu lượng.",
                "Một công ty muốn phát hiện sự cố gián đoạn trang web và tự động chuyển hướng khách hàng đến một vị trí hoạt động bình thường.",
                "Một công ty muốn định tuyến lưu lượng truy cập đến Region cung cấp trải nghiệm nhanh nhất dựa trên đo lường hiệu năng.",
                "Một công ty muốn định tuyến lưu lượng truy cập chỉ đến các vị trí mà họ có quyền phân phối."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 10: Một nhà phát triển đang thử nghiệm một bản mẫu (prototype) trên Amazon EC2. Các instance bị chấm dứt sau khi thử nghiệm, nhưng ứng dụng yêu cầu tính toán không bị gián đoạn trong khi xử lý. Loại tính giá Amazon EC2 instance nào đáp ứng nhu cầu với chi phí thấp nhất?",
            options: [
                "Scheduled Reserved Instance (Instance đặt trước theo lịch)",
                "On-Demand Instance (Instance theo yêu cầu)",
                "Spot Instance",
                "Reserved Instance (Instance đặt trước)"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 11: Một công ty có một bộ công việc xử lý dữ liệu lớn (big data) trong Amazon Simple Queue Service (Amazon SQS) cần nhiều năng lực tính toán. Mô hình tính giá Amazon EC2 instance nào đáp ứng nhu cầu với chi phí thấp nhất có thể?",
            options: [
                "Spot Instance",
                "Reserved Instance (Instance đặt trước)",
                "On-Demand Instance (Instance theo yêu cầu)",
                "Scheduled Reserved Instance (Instance đặt trước theo lịch)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 12: Kịch bản nào phù hợp với lưu trữ Amazon Elastic File System (Amazon EFS)?",
            options: [
                "Một công ty muốn lưu trữ một trang web.",
                "Một công ty cần lưu trữ tệp tạm thời cho ứng dụng đang chạy trên Amazon EC2.",
                "Một công ty cần cung cấp quyền đọc và ghi vào hệ thống tệp mạng (NFS) cho tất cả các Amazon EC2 instance trong đám mây riêng ảo (VPC) của mình.",
                "Một công ty muốn xây dựng một hồ dữ liệu (data lake) quy mô petabyte cho phân tích dữ liệu."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 13: Phát biểu nào sau đây về các dịch vụ lưu trữ AWS là chính xác?",
            options: [
                "Để truy cập Amazon Elastic File System (Amazon EFS), hệ thống tệp phải được gắn (mount) trên một Amazon EC2 instance trong đám mây riêng ảo (VPC) của bạn.",
                "Các ổ đĩa Amazon Elastic Block Store (Amazon EBS) cung cấp bộ lưu trữ khối tạm thời cho Amazon EC2, nhưng chúng không tồn tại khi EC2 instance bị dừng.",
                "Amazon EC2 instance store cung cấp bộ lưu trữ bền vững cho Amazon EC2 instance mà nó được gắn vào, nhưng nó không khả dụng cho các EC2 instance khác.",
                "Amazon EC2 instance store là lựa chọn tốt để chạy xử lý dữ liệu lớn (big data) và phân tích."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 14: Phát biểu nào sau đây về bảo mật của Amazon S3 Glacier là chính xác?",
            options: [
                "Dữ liệu trong Amazon S3 Glacier là công khai theo mặc định.",
                "Mã hóa ứng dụng phải được khởi tạo trên các đối tượng lưu trữ trong Amazon S3 Glacier bằng AWS Management Console hoặc lập trình.",
                "Quyền truy cập vào Amazon S3 Glacier có thể được quản lý bằng các chính sách AWS Identity and Access Management (IAM policies).",
                "Đối với tất cả các thao tác và tương tác với Amazon S3 Glacier, bạn có thể sử dụng AWS Management Console."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 15: Tính năng nào của Amazon RDS mà một công ty nên cấu hình để bật khả năng sẵn sàng cao (high availability)?",
            options: [
                "Triển khai trên Đám mây riêng ảo (VPC deployment)",
                "Mã hóa bằng các khóa AWS Key Management Service (AWS KMS)",
                "Triển khai Multi-AZ (Multi-AZ deployment)",
                "Lưu trữ Provisioned IOPS"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 16: Kịch bản nào mô tả tốt nhất trường hợp sử dụng cho Amazon Aurora?",
            options: [
                "Một công ty cần một cơ sở dữ liệu tương thích với PostgreSQL có khả năng sẵn sàng cao.",
                "Một công ty cần một kho dữ liệu (data warehouse) có thể truy vấn bằng các công cụ phân tích kinh doanh (BI) tiêu chuẩn.",
                "Một công ty cần cơ sở dữ liệu để lưu trữ dữ liệu bán cấu trúc.",
                "Một công ty muốn chạy cơ sở dữ liệu Oracle trên đám mây."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 17: AWS Trusted Advisor hỗ trợ một công ty mới bắt đầu sử dụng AWS như thế nào?",
            options: [
                "AWS Trusted Advisor cung cấp các khuyến nghị về việc cấu hình tài nguyên AWS của bạn.",
                "AWS Trusted Advisor tự động tăng giới hạn dịch vụ (quotas) nếu bạn gần đạt đến giới hạn.",
                "AWS Trusted Advisor ngăn chặn truy cập vào các tài nguyên có quyền hạn quá rộng.",
                "AWS Trusted Advisor cung cấp các khuyến nghị về việc di chuyển tài nguyên tại chỗ (on-premises) lên đám mây."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 18: Loại cảnh báo nào có thể được cung cấp bởi AWS Trusted Advisor?",
            options: [
                "Cảnh báo về các lời gọi API bất thường được thực hiện trong một tài khoản AWS",
                "Cảnh báo về truy cập trái phép trong một tài khoản AWS",
                "Cảnh báo rằng xác thực đa yếu tố (MFA) chưa được kích hoạt trên một tài khoản AWS",
                "Cảnh báo rằng một người dùng AWS Identity and Access Management (IAM) đã yêu cầu thay đổi giới hạn dịch vụ"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 19: Những thông tin nào BẮT BUỘC phải được cấu hình cho các Amazon EC2 instance sẽ là một phần của nhóm Amazon EC2 Auto Scaling? (Chọn HAI.)",
            options: [
                "Loại Amazon EC2 instance (Amazon EC2 instance type)",
                "ID của một Amazon Machine Image (AMI)",
                "Danh sách kiểm soát truy cập mạng (Network ACL)",
                "Các chỉ số nhóm Amazon EC2 Auto Scaling (Auto Scaling group metrics)",
                "Dung lượng ổ đĩa lưu trữ (Storage volume)"
            ],
            correct: [0, 1]
        },
        {
            q: "Câu hỏi 20: Phát biểu nào sau đây về AWS Auto Scaling là đúng?",
            options: [
                "Bạn có thể sử dụng Amazon EC2 Auto Scaling hoặc AWS Auto Scaling, nhưng không thể sử dụng cả hai.",
                "AWS Auto Scaling có thể được sử dụng để tự động mở rộng cơ sở dữ liệu Amazon RDS.",
                "AWS Auto Scaling có thể được sử dụng để tự động mở rộng các bảng và chỉ mục Amazon DynamoDB.",
                "AWS Auto Scaling và Amazon EC2 Auto Scaling là đồng nghĩa với nhau."
            ],
            correct: [2]
        }
    ],

    // ĐỀ 6: AWS KNOWLEDGE CHECK ALL 10 MODULES (100 CÂU - ĐÃ DỊCH HOÀN TOÀN SANG TIẾNG VIỆT)
    6: [
        {
            q: "Câu hỏi 1: AWS khuyến nghị bạn nên phân bổ các tài nguyên tính toán của mình qua các Vùng khả dụng (Availability Zones) như thế nào? (Chọn đáp án đúng nhất.)",
            options: ["Tất cả các Vùng khả dụng", "Một Vùng khả dụng đơn lẻ", "Nhiều Vùng khả dụng", "Không phân bổ Vùng nào"],
            correct: [2]
        },
        {
            q: "Câu hỏi 2: Đúng hay sai? Để nhận được mức giá chiết khấu liên quan đến Reserved Instances (Phiên bản đặt trước), bạn bắt buộc phải thanh toán toàn bộ chi phí trước cho thời hạn thỏa thuận.",
            options: ["Sai", "Đúng"],
            correct: [0]
        },
        {
            q: "Câu hỏi 3: Đúng hay sai? Các vị trí biên (Edge locations) chỉ nằm trong cùng khu vực địa lý với các AWS Region.",
            options: ["Sai", "Đúng"],
            correct: [0]
        },
        {
            q: "Câu hỏi 4: Amazon Elastic Block Store (Amazon EBS) được khuyến nghị sử dụng khi dữ liệu ___ và ___ . (Chọn hai đáp án.)",
            options: [
                "Yêu cầu một giải pháp mã hóa dữ liệu",
                "Yêu cầu lưu trữ ở cấp độ đối tượng (object-level storage)",
                "Cần được lưu trữ ở một Vùng khả dụng khác với Vùng đặt phiên bản EC2",
                "Phải được truy cập nhanh chóng và yêu cầu lưu trữ độ bền lâu dài"
            ],
            correct: [0, 3]
        },
        {
            q: "Câu hỏi 5: Dịch vụ mạng nào của AWS cho phép doanh nghiệp tạo một mạng ảo riêng biệt bên trong đám mây AWS? (Chọn đáp án đúng nhất.)",
            options: ["Amazon VPC", "Amazon Route 53", "AWS Direct Connect", "AWS Config"],
            correct: [0]
        },
        {
            q: "Câu hỏi 6: Lợi ích kinh tế theo quy mô (Economies of scale) đạt được từ điều gì? (Chọn đáp án đúng nhất.)",
            options: [
                "Việc có nhiều nhà cung cấp đám mây khác nhau",
                "Việc tập trung hàng trăm ngàn khách hàng trên đám mây",
                "Việc có hàng trăm dịch vụ đám mây có sẵn trên Internet",
                "Việc phải đầu tư lớn vào các trung tâm dữ liệu và máy chủ vật lý"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 7: Công cụ nào của AWS cho phép bạn khám phá các dịch vụ và tạo ước tính chi phí cho các trường hợp sử dụng của bạn trên AWS? (Chọn đáp án đúng nhất.)",
            options: [
                "Bảng thông tin thanh toán AWS (AWS Billing Dashboard)",
                "Báo cáo chi phí và mức sử dụng AWS (AWS Cost and Usage Report)",
                "Ngân sách AWS (AWS Budgets)",
                "Công cụ tính giá AWS (AWS Pricing Calculator)"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 8: Điều nào sau đây mô tả đúng nhất về một hệ thống có thể chịu đựng được một số mức độ suy giảm hiệu năng, trải qua thời gian ngừng hoạt động tối thiểu và yêu cầu can thiệp thủ công ít nhất?",
            options: [
                "Có khả năng mở rộng (Scalable)",
                "Có tính đàn hồi (Elastic)",
                "Tính sẵn sàng cao (Highly Available)",
                "Khả năng chịu lỗi (Fault-tolerant)"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 9: Những lớp lưu trữ nào sau đây có thể được sử dụng trong chính sách vòng đời đối tượng (lifecycle policy) của Amazon S3? (Chọn ba đáp án.)",
            options: [
                "Amazon DynamoDB",
                "S3 Glacier",
                "S3 - Truy cập Tiêu chuẩn (S3 Standard)",
                "S3 - Giảm độ dự phòng (S3 Reduced Redundancy)",
                "AWS Storage Gateway",
                "S3 - Truy cập không thường xuyên (S3 Infrequent Access)"
            ],
            correct: [1, 2, 5]
        },
        {
            q: "Câu hỏi 10: Đúng hay Sai? Khi bạn tạo một bucket trong Amazon S3, nó sẽ luôn được liên kết với một Khu vực AWS (AWS Region) cụ thể.",
            options: ["Sai", "Đúng"],
            correct: [1]
        },
        {
            q: "Câu hỏi 11: Dịch vụ nào sau đây là dịch vụ tính toán không máy chủ (serverless compute service) trong AWS? (Chọn đáp án đúng nhất.)",
            options: ["AWS Lambda", "AWS OpsWorks", "Amazon EC2", "AWS Config"],
            correct: [0]
        },
        {
            q: "Câu hỏi 12: ___ có nghĩa là hạ tầng có sẵn thành phần dự phòng lỗi, và ___ có nghĩa là các tài nguyên tự động điều chỉnh theo nhu cầu.",
            options: [
                "Linh hoạt và mở rộng – không cần can thiệp con người",
                "Chịu lỗi – linh hoạt và mở rộng",
                "Chịu lỗi – không cần can thiệp con người",
                "Linh hoạt và mở rộng – chịu lỗi",
                "Không cần can thiệp con người – chịu lỗi"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 13: Trong Amazon VPC, phạm vi dải địa chỉ IP lớn nhất mà bạn có thể cấu hình cho một VPC là bao nhiêu? (Chọn đáp án đúng nhất.)",
            options: ["/24", "/28", "/16", "/30"],
            correct: [2]
        },
        {
            q: "Câu hỏi 14: Lợi ích của việc sử dụng AWS Organizations là gì? (Chọn hai đáp án.)",
            options: [
                "Cung cấp số lượng đơn vị tổ chức (OU) lồng nhau không giới hạn",
                "Cung cấp khả năng tạo các nhóm tài khoản và sau đó gắn các chính sách áp dụng cho cả nhóm",
                "Ngăn chặn các hạn chế áp dụng đối với người dùng root",
                "Đơn giản hóa việc tự động hóa tạo và quản lý tài khoản bằng cách sử dụng API",
                "Thay thế các chính sách IAM bằng SCP đơn giản hơn"
            ],
            correct: [1, 3]
        },
        {
            q: "Câu hỏi 15: Đúng hay sai? Dịch vụ quản lý khóa AWS KMS (Key Management Service) cho phép bạn đánh giá và kiểm toán cấu hình các tài nguyên AWS.",
            options: ["Sai", "Đúng"],
            correct: [0]
        },
        {
            q: "Câu hỏi 16: Khi tạo chính sách IAM, hai loại quyền truy cập nào có thể được cấp cho người dùng? (Chọn hai đáp án.)",
            options: [
                "Quyền truy cập Bảng điều khiển quản lý (AWS Management Console access)",
                "Quyền truy cập được ủy quyền (Authorized access)",
                "Quyền gốc quản trị (Administrative root access)",
                "Quyền truy cập lập trình (Programmatic access)"
            ],
            correct: [0, 3]
        },
        {
            q: "Câu hỏi 17: Thành phần nào sau đây phải được cấu hình trên bộ cân bằng tải Elastic Load Balancing để lắng nghe và tiếp nhận lưu lượng truy cập gửi đến?",
            options: ["Một cổng (Port)", "Một giao diện mạng (Network interface)", "Một phiên bản máy chủ (Instance)", "Bộ lắng nghe (Listener)"],
            correct: [3]
        },
        {
            q: "Câu hỏi 18: Bạn nên xem xét các yếu tố nào khi lựa chọn loại cơ sở dữ liệu?",
            options: [
                "Thời gian truy cập dữ liệu",
                "Tần suất thực hiện truy vấn",
                "Tất cả các yếu tố trên",
                "Mức độ yêu cầu tính sẵn sàng cao",
                "Kích thước tổng thể của dữ liệu"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 19: Đúng hay Sai? Theo mặc định, tất cả dữ liệu được lưu trữ trong Amazon S3 đều có thể được xem công khai bởi bất kỳ ai.",
            options: ["Sai", "Đúng"],
            correct: [0]
        },
        {
            q: "Câu hỏi 20: Biện pháp kiểm soát bảo mật tùy chọn nào có thể được áp dụng ở lớp mạng con (subnet layer) của một VPC? (Chọn đáp án đúng nhất.)",
            options: [
                "Danh sách kiểm soát truy cập mạng (Network ACL)",
                "Nhóm bảo mật (Security group)",
                "Tường lửa ứng dụng Web (WAF)",
                "Tường lửa thông thường (Firewall)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 21: Nếu dự án của bạn yêu cầu tạo các báo cáo hàng tháng với việc xử lý lặp đi lặp lại một lượng dữ liệu rất lớn, bạn nên cân nhắc chọn tùy chọn mua Amazon EC2 nào?",
            options: [
                "Scheduled Reserved Instances (Đặt trước theo lịch)",
                "On-Demand Instances (Theo yêu cầu)",
                "Spot Instances (Giá điểm)",
                "Dedicated Hosts (Máy chủ riêng)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 22: Bạn cần tìm một mục trong bảng Amazon DynamoDB bằng một thuộc tính không phải là khóa chính. Bạn nên sử dụng thao tác nào sau đây?",
            options: ["Scan (Quét toàn bộ)", "Query (Truy vấn)", "PutItem (Thêm mục)", "GetItem (Lấy mục)"],
            correct: [0]
        },
        {
            q: "Câu hỏi 23: Trong Amazon DynamoDB, một thuộc tính (Attribute) được định nghĩa là gì?",
            options: [
                "Một tập hợp các thuộc tính khác nhau",
                "Một yếu tố dữ liệu cơ bản không thể chia nhỏ hơn",
                "Một tập hợp các mục dữ liệu (items)"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 24: Đối với dịch vụ Amazon S3 Glacier, Kho lưu trữ (Vault) là gì? (Chọn đáp án đúng nhất.)",
            options: [
                "Tập hợp các quy tắc xác định ai có thể hoặc không thể truy cập tệp",
                "Một chính sách xác định quyền truy cập nội dung trong Glacier",
                "Một vùng chứa (container) dùng để lưu trữ các tệp kho lưu trữ (archives)",
                "Một đối tượng tệp tin dữ liệu cụ thể (ảnh, video, tài liệu)"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 25: Đúng hay sai? Container chứa toàn bộ một hệ điều hành hoàn chỉnh bên trong nó.",
            options: ["Sai", "Đúng"],
            correct: [0]
        },
        {
            q: "Câu hỏi 26: Điều nào sau đây KHÔNG phải là lợi ích của điện toán đám mây so với điện toán tại chỗ (on-premises)? (Chọn đáp án đúng nhất.)",
            options: [
                "Loại bỏ việc phải dự đoán nhu cầu dung lượng hạ tầng",
                "Hưởng lợi từ quy mô kinh doanh cực kỳ lớn",
                "Chuyển đổi chi phí đầu tư cố định thành chi phí biến đổi",
                "Trả tiền cho việc lắp đặt, xếp chồng và cấp nguồn điện cho máy chủ",
                "Tăng tốc độ và tính linh hoạt trong triển khai"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 27: Bạn cần cho phép các tài nguyên trong một mạng con riêng (private subnet) truy cập ra Internet. Điều nào sau đây bắt buộc phải có? (Chọn đáp án đúng nhất.)",
            options: [
                "Cổng NAT (NAT gateway)",
                "Nhóm bảo mật (Security groups)",
                "Bảng định tuyến (Route tables)",
                "Danh sách kiểm soát truy cập mạng (Network ACLs)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 28: Tính năng nào của Amazon EC2 đảm bảo các phiên bản máy chủ của bạn sẽ không chia sẻ chung máy chủ vật lý với bất kỳ khách hàng AWS nào khác? (Chọn đáp án đúng nhất.)",
            options: ["Amazon VPC", "Reserved Instances", "Dedicated Instances (Phiên bản dành riêng)", "Placement groups"],
            correct: [2]
        },
        {
            q: "Câu hỏi 29: Điều nào sau đây KHÔNG phải là một mô hình dịch vụ điện toán đám mây? (Chọn đáp án đúng nhất.)",
            options: [
                "Hạ tầng như một dịch vụ (IaaS)",
                "Phần mềm như một dịch vụ (SaaS)",
                "Nền tảng như một dịch vụ (PaaS)",
                "Quản trị hệ thống như một dịch vụ (System Administration as a Service)"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 30: Trong Amazon VPC, kích thước nhỏ nhất của một mạng con (subnet) mà bạn có thể tạo là bao nhiêu? (Chọn đáp án đúng nhất.)",
            options: ["/28", "/30", "/26", "/24"],
            correct: [0]
        },
        {
            q: "Câu hỏi 31: Những tính năng nào sau đây thuộc về Amazon Elastic Block Store (Amazon EBS)? (Chọn hai đáp án.)",
            options: [
                "Các ổ đĩa EBS có thể được mã hóa một cách trong suốt đối với khối lượng công việc trên EC2 instance",
                "Dữ liệu trên ổ đĩa EBS sẽ bị mất hoàn toàn khi EC2 instance bị dừng (stopped)",
                "Dữ liệu EBS được sao lưu tự động lên băng từ",
                "Dữ liệu lưu trữ trên EBS được tự động nhân bản (replicate) trong cùng một Vùng khả dụng"
            ],
            correct: [0, 3]
        },
        {
            q: "Câu hỏi 32: Hành động nào sau đây BẮT BUỘC nên được thực hiện bởi tài khoản người dùng root của AWS? (Chọn đáp án đúng nhất.)",
            options: [
                "Bảo mật quyền truy cập ứng dụng",
                "Tích hợp các dịch vụ AWS",
                "Thay đổi gói hỗ trợ AWS (AWS support plan)",
                "Thay đổi các quyền truy cập chi tiết của người dùng"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 33: Trụ cột Tính bền vững (Sustainability) trong Khung kiến trúc AWS Well-Architected tập trung vào điều gì?",
            options: [
                "Giảm thiểu tác động đến môi trường khi chạy các khối lượng công việc trên đám mây",
                "Tự động hóa các bản cập nhật cho ứng dụng đám mây",
                "Tránh các chi phí không cần thiết khi vận hành trên đám mây",
                "Thiết kế các hệ thống có thể khôi phục nhanh chóng sau sự cố"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 34: Một Amazon Machine Image (AMI) bao gồm những thành phần nào? (Chọn đáp án đúng nhất.)",
            options: [
                "Ánh xạ thiết bị khối (Block device mapping)",
                "Tất cả các thành phần nêu trên",
                "Mẫu cho ổ đĩa gốc (root volume template)",
                "Quyền khởi chạy (Launch permissions)"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 35: Sau khi chuyển sang AWS Cloud, bạn muốn đảm bảo các cài đặt bảo mật phù hợp được áp dụng. Công cụ trực tuyến nào có thể hỗ trợ kiểm tra tuân thủ bảo mật?",
            options: ["AWS Support", "Amazon CloudWatch", "Amazon Kinesis", "AWS Trusted Advisor"],
            correct: [3]
        },
        {
            q: "Câu hỏi 36: Điều nào sau đây thuộc trách nhiệm của AWS trong Mô hình trách nhiệm chia sẻ (Shared Responsibility Model)? (Chọn đáp án đúng nhất.)",
            options: [
                "Bảo mật quyền truy cập ứng dụng",
                "Cấu hình các ứng dụng của bên thứ ba",
                "Quản lý các AMI tùy chỉnh của người dùng",
                "Bảo trì và quản lý phần cứng vật lý"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 37: Bạn tạo một VPC với dải địa chỉ CIDR 10.0.1.0/24 (tổng 256 IP). Có bao nhiêu địa chỉ IP thực sự khả dụng để sử dụng? (Chọn đáp án đúng nhất.)",
            options: ["251", "246", "256", "250"],
            correct: [0]
        },
        {
            q: "Câu hỏi 38: Đúng hay sai? Điện toán đám mây cung cấp cách đơn giản để truy cập máy chủ, lưu trữ và cơ sở dữ liệu. Bạn sở hữu các phần cứng kết nối mạng này và AWS chỉ quản lý phần mềm cho bạn.",
            options: ["Đúng", "Sai"],
            correct: [1]
        },
        {
            q: "Câu hỏi 39: Những thành phần nào sau đây được sử dụng để tạo một Cấu hình khởi chạy (Launch Configuration) cho Amazon EC2 Auto Scaling? (Chọn ba đáp án.)",
            options: [
                "Amazon Machine Image (AMI)",
                "Các ổ đĩa Amazon Elastic Block Store (EBS)",
                "Loại phiên bản máy chủ (Instance type)",
                "Đám mây riêng ảo (VPC) và các mạng con",
                "Bộ cân bằng tải (Load balancer)"
            ],
            correct: [0, 1, 2]
        },
        {
            q: "Câu hỏi 40: Đâu là các phương thức để truy cập và tương tác với các dịch vụ cốt lõi của AWS? (Chọn ba đáp án.)",
            options: [
                "Bảng điều khiển quản lý AWS (AWS Management Console)",
                "Chợ ứng dụng AWS (AWS Marketplace)",
                "Bộ công cụ phát triển phần mềm (SDKs)",
                "Các cuộc gọi hỗ trợ kỹ thuật",
                "Giao diện dòng lệnh AWS (AWS CLI)"
            ],
            correct: [0, 2, 4]
        },
        {
            q: "Câu hỏi 41: Thành phần nào trong Hạ tầng toàn cầu của AWS được Amazon CloudFront sử dụng để đảm bảo phân phối nội dung với độ trễ thấp? (Chọn đáp án đúng nhất.)",
            options: [
                "Các Khu vực AWS (AWS Regions)",
                "Các Vùng khả dụng (Availability Zones)",
                "Amazon VPC",
                "Các vị trí biên AWS (Edge locations)"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 42: Một công ty có ứng dụng .NET kết nối với cơ sở dữ liệu MySQL. Họ muốn di chuyển ứng dụng lên AWS để sử dụng các tính năng như tính sẵn sàng cao và sao lưu tự động. Cơ sở dữ liệu nào là lựa chọn lý tưởng nhất?",
            options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora", "Amazon RDS"],
            correct: [2]
        },
        {
            q: "Câu hỏi 43: Nguyên tắc nào sau đây là nguyên tắc thiết kế quan trọng khi xây dựng các hệ thống trên đám mây?",
            options: [
                "Thực hiện các thay đổi lớn không thường xuyên",
                "Sử dụng càng nhiều dịch vụ càng tốt",
                "Xây dựng các thành phần liên kết chặt chẽ với nhau",
                "Giả định rằng mọi thành phần đều có thể gặp sự cố (Assume everything will fail)"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 44: Những điều nào sau đây là các trụ cột thuộc Khung kiến trúc AWS Well-Architected? (Chọn ba đáp án.)",
            options: [
                "Vận hành xuất sắc (Operational Excellence)",
                "Tối ưu hóa chi phí (Cost Optimization)",
                "Bảo mật (Security)",
                "Tính bền vững dữ liệu (Persistence)"
            ],
            correct: [0, 1, 2]
        },
        {
            q: "Câu hỏi 45: Những thành phần nào sau đây thuộc cấu hình của một nhóm Auto Scaling? (Chọn ba đáp án.)",
            options: [
                "Dung lượng mong muốn (Desired capacity)",
                "Kích thước tối đa (Maximum size)",
                "Kiểm tra sức khỏe (Health checks)",
                "Kích thước tối thiểu (Minimum size)"
            ],
            correct: [0, 1, 3]
        },
        {
            q: "Câu hỏi 46: Dịch vụ nào sau đây giúp bạn thu thập và theo dõi các chỉ số quan trọng từ Amazon RDS và Amazon EC2?",
            options: [
                "AWS CloudTrail",
                "Amazon CloudFront",
                "Amazon CloudSearch",
                "Amazon EC2 Auto Scaling",
                "Amazon CloudWatch"
            ],
            correct: [4]
        },
        {
            q: "Câu hỏi 47: Bạn đang thiết kế một ứng dụng web thương mại điện tử phục vụ hàng trăm ngàn người dùng đồng thời. Công nghệ cơ sở dữ liệu nào phù hợp nhất để lưu trữ trạng thái phiên (session state)?",
            options: ["Amazon Redshift", "Amazon RDS", "Amazon S3", "Amazon DynamoDB"],
            correct: [3]
        },
        {
            q: "Câu hỏi 48: Đúng hay Sai? Amazon S3 là dịch vụ lưu trữ đối tượng phù hợp cho việc lưu trữ các tệp phẳng như tài liệu Word, hình ảnh, video.",
            options: ["Sai", "Đúng"],
            correct: [1]
        },
        {
            q: "Câu hỏi 49: Thành phần hạ tầng nào của AWS được Amazon CloudFront dùng để truyền tải nội dung nhanh chóng đến người dùng cuối?",
            options: [
                "Các vị trí biên AWS (Edge locations)",
                "Các Vùng khả dụng (Availability Zones)",
                "Các Khu vực AWS (AWS Regions)",
                "Đám mây riêng ảo (Amazon VPC)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 50: Bạn có thể sử dụng dịch vụ Amazon Elastic File System (Amazon EFS) để làm gì? (Chọn đáp án đúng nhất.)",
            options: [
                "Lưu trữ một mạng CDN để phân phối toàn bộ trang web",
                "Tạo nội dung động tùy chỉnh theo từng người dùng",
                "Triển khai bộ lưu trữ hệ thống tệp mà nhiều máy chủ EC2 có thể truy cập đồng thời",
                "Cung cấp lưu trữ tệp đơn giản chỉ dùng riêng cho các dịch vụ nội bộ AWS"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 51: Điều nào sau đây KHÔNG thuộc bốn lĩnh vực của trụ cột Hiệu suất trong Khung kiến trúc AWS Well-Architected?",
            options: [
                "Khả năng truy xuất nguồn gốc (Traceability)",
                "Sự đánh đổi (Tradeoffs)",
                "Lựa chọn giải pháp (Selection)",
                "Giám sát (Monitoring)"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 52: Lợi ích của điện toán đám mây so với việc tự vận hành hạ tầng tại chỗ (on-premises) là gì? (Chọn đáp án đúng nhất.)",
            options: [
                "Tất cả các lợi ích nêu trên",
                "Triển khai quy mô toàn cầu chỉ trong vài phút",
                "Tăng tốc độ và sự linh hoạt cho doanh nghiệp",
                "Sử dụng dung lượng tài nguyên linh hoạt theo nhu cầu",
                "Tránh các khoản chi phí đầu tư hạ tầng cố định ban đầu lớn"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 53: Đối với các dịch vụ như EC2 và RDS, bạn có thể chọn tùy chọn Phiên bản đặt trước (Reserved Instances). Những tùy chọn thanh toán nào có sẵn? (Chọn ba đáp án.)",
            options: [
                "PURI (Thanh toán trước một phần)",
                "NURI (Không thanh toán trước)",
                "MURI",
                "AURI (Thanh toán toàn bộ trước)",
                "DURI"
            ],
            correct: [0, 1, 3]
        },
        {
            q: "Câu hỏi 54: Phát biểu nào sau đây là ĐÚNG về mô hình định giá trên AWS? (Chọn đáp án đúng nhất.)",
            options: [
                "Phần lớn trường hợp, truyền dữ liệu VÀO (inbound) bị tính phí trên mỗi GB",
                "Truyền dữ liệu RA (outbound) hoàn toàn miễn phí không giới hạn",
                "Dịch vụ tính toán thường tính phí cố định hàng tháng theo loại máy chủ",
                "Dịch vụ lưu trữ thường được tính phí theo dung lượng Gigabyte (GB) sử dụng"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 55: Trong Mô hình trách nhiệm chia sẻ, ví dụ nào sau đây thể hiện việc 'Bảo mật TRONG đám mây' (Security in the cloud)? (Chọn hai đáp án.)",
            options: [
                "Cấu hình các quy tắc cho nhóm bảo mật (Security groups)",
                "Mã hóa dữ liệu khi lưu trữ và khi truyền trên mạng",
                "Bảo vệ an ninh vật lý cho các trung tâm dữ liệu",
                "Bảo vệ cơ sở hạ tầng mạng toàn cầu của AWS"
            ],
            correct: [0, 1]
        },
        {
            q: "Câu hỏi 56: Khả năng của một hệ thống vẫn duy trì hoạt động bình thường ngay cả khi một số thành phần bên trong gặp sự cố được gọi là gì?",
            options: ["Tính sẵn sàng cao", "Độ bền dữ liệu cao", "Khả năng chịu lỗi (Fault Tolerance)", "Tính linh hoạt cao"],
            correct: [2]
        },
        {
            q: "Câu hỏi 57: Đúng hay sai? Amazon RDS tự động cập nhật bản vá phần mềm cơ sở dữ liệu và tự động sao lưu dữ liệu, cho phép khôi phục về một thời điểm cụ thể.",
            options: ["Đúng", "Sai"],
            correct: [0]
        },
        {
            q: "Câu hỏi 58: Đúng hay sai? AWS Organizations cho phép bạn gộp nhiều tài khoản AWS lại để quản lý tập trung từ một nơi.",
            options: ["Sai", "Đúng"],
            correct: [1]
        },
        {
            q: "Câu hỏi 59: Công ty bạn có đợt kiểm toán và yêu cầu nhật ký ghi lại toàn bộ các hoạt động truy cập vào tài nguyên AWS. Dịch vụ nào cung cấp thông tin này?",
            options: ["Amazon CloudWatch", "Amazon SNS", "Amazon EC2", "AWS CloudTrail"],
            correct: [3]
        },
        {
            q: "Câu hỏi 60: Bạn có thể chạy các ứng dụng từ một Khu vực AWS (Region) gần với người dùng cuối hơn để làm ___ độ trễ.",
            options: ["tăng", "giảm"],
            correct: [1]
        },
        {
            q: "Câu hỏi 61: Đúng hay sai? Các Vùng khả dụng (AZs) trong cùng một Khu vực (Region) được kết nối với nhau bằng đường truyền mạng độ trễ cực thấp.",
            options: ["Đúng", "Sai"],
            correct: [0]
        },
        {
            q: "Câu hỏi 62: Tùy chọn mua EC2 nào là tối ưu nhất cho các khối lượng công việc dài hạn, ổn định và dự đoán trước được?",
            options: ["On-Demand Instances (Theo yêu cầu)", "Reserved Instances (Đặt trước)", "Spot Instances (Giá điểm)"],
            correct: [1]
        },
        {
            q: "Câu hỏi 63: Amazon S3 tự động sao chép các đối tượng dữ liệu như thế nào? (Chọn đáp án đúng nhất.)",
            options: [
                "Trên nhiều ổ đĩa trong cùng một Vùng khả dụng",
                "Trên nhiều S3 bucket khác nhau",
                "Qua nhiều Vùng khả dụng (AZs) khác nhau trong cùng một Khu vực (Region)",
                "Qua nhiều Khu vực (Regions) khác nhau trên toàn thế giới"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 64: Những công cụ nào sau đây của AWS giúp ứng dụng của bạn tự động mở rộng hoặc thu hẹp theo nhu cầu thực tế? (Chọn hai đáp án.)",
            options: [
                "Amazon EC2 Auto Scaling",
                "Các Vùng khả dụng (Availability Zones)",
                "Elastic Load Balancing",
                "AWS Config",
                "AWS CloudFormation"
            ],
            correct: [0, 2]
        },
        {
            q: "Câu hỏi 65: Bốn gói dịch vụ hỗ trợ (Support plans) mà AWS cung cấp bao gồm những gói nào? (Chọn đáp án đúng nhất.)",
            options: [
                "Basic, Developer, Business, Enterprise",
                "Tất cả các gói hỗ trợ đều miễn phí",
                "Free, Bronze, Silver, Gold",
                "Basic, Startup, Business, Enterprise"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 66: Dịch vụ nào bạn sẽ sử dụng để gửi thông báo cảnh báo đến quản trị viên khi Amazon CloudWatch phát hiện sự cố?",
            options: ["Amazon Route 53", "AWS Trusted Advisor", "AWS CloudTrail", "Amazon SNS"],
            correct: [3]
        },
        {
            q: "Câu hỏi 67: Phát biểu nào sau đây là ĐÚNG khi nói về các Khu vực AWS (Regions)? (Chọn hai đáp án.)",
            options: [
                "Region là vị trí địa lý vật lý của khách hàng",
                "Một Region là một khu vực địa lý vật lý chứa nhiều Vùng khả dụng (AZs)",
                "Mỗi Region nằm ở một khu vực địa lý riêng biệt hoàn toàn",
                "Tất cả các Region đều nằm chung trong một khu vực địa lý"
            ],
            correct: [1, 2]
        },
        {
            q: "Câu hỏi 68: Mô hình định giá nào cho phép khách hàng AWS chỉ trả tiền cho các tài nguyên dựa trên thời gian và dung lượng thực tế sử dụng? (Chọn đáp án đúng nhất.)",
            options: [
                "Trả tiền khi đặt trước (Pay as you reserve)",
                "Dùng bao nhiêu trả bấy nhiêu (Pay as you go)",
                "Trả tiền khi ngừng sử dụng",
                "Trả tiền ngay khi mua"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 69: Những nguyên tắc thiết kế nào được khuyến nghị để đạt hiệu suất tối ưu trên đám mây? (Chọn hai đáp án.)",
            options: [
                "Bật tính năng truy xuất nguồn gốc",
                "Sử dụng các kiến trúc không máy chủ (Serverless architectures)",
                "Phân tích và phân bổ chi phí chi tiết",
                "Dân chủ hóa các công nghệ nâng cao (Democratize advanced technologies)",
                "Cân bằng chính xác giữa cung và cầu"
            ],
            correct: [1, 3]
        },
        {
            q: "Câu hỏi 70: Thước đo khả năng cung cấp đầy đủ chức năng của hệ thống khi người dùng có nhu cầu sử dụng được gọi là gì?",
            options: ["Hiệu suất vận hành", "Độ tin cậy (Reliability)", "Tính sẵn sàng", "Khả năng chịu lỗi"],
            correct: [1]
        },
        {
            q: "Câu hỏi 71: Ba loại bộ cân bằng tải mà dịch vụ Elastic Load Balancing (ELB) cung cấp là gì?",
            options: [
                "Auto Scaling Load Balancer",
                "Network Load Balancer",
                "Compute Load Balancer",
                "Internet Load Balancer",
                "Classic Load Balancer",
                "Application Load Balancer"
            ],
            correct: [1, 4, 5]
        },
        {
            q: "Câu hỏi 72: Đúng hay sai? AWS sở hữu và bảo trì các phần cứng vật lý kết nối mạng, trong khi bạn quản lý và cấp phát các tài nguyên ứng dụng cần thiết.",
            options: ["Sai", "Đúng"],
            correct: [1]
        },
        {
            q: "Câu hỏi 73: Đúng hay sai? Mạng, lưu trữ, tính toán và cơ sở dữ liệu là các ví dụ về danh mục dịch vụ mà AWS cung cấp.",
            options: ["Đúng", "Sai"],
            correct: [0]
        },
        {
            q: "Câu hỏi 74: Đúng hay sai? Các mạng con riêng (Private subnets) có thể kết nối trực tiếp ra Internet mà không cần qua cổng chuyển đổi.",
            options: ["Đúng", "Sai"],
            correct: [1]
        },
        {
            q: "Câu hỏi 75: Tên của một S3 Bucket phải đảm bảo tính duy nhất ở phạm vi nào? (Chọn đáp án đúng nhất.)",
            options: [
                "Duy nhất trên toàn cầu (Toàn bộ các tài khoản AWS)",
                "Duy nhất trong cùng một Khu vực (Region)",
                "Duy nhất trên tất cả các tài khoản của riêng bạn",
                "Duy nhất trong tài khoản AWS hiện tại"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 76: Thực hành tốt nhất nào giúp tăng cường bảo mật tài khoản bằng cách sử dụng dịch vụ IAM? (Chọn hai đáp án.)",
            options: [
                "Tránh dùng nhóm IAM để phân quyền",
                "Giữ các tài khoản người dùng không hoạt động mở liên tục",
                "Định nghĩa quyền truy cập chi tiết tối thiểu (Fine-grained access rights)",
                "Quản lý và kiểm soát chặt chẽ quyền truy cập tài nguyên AWS"
            ],
            correct: [2, 3]
        },
        {
            q: "Câu hỏi 77: Những thông tin nào BẮT BUỘC phải chỉ định khi khởi chạy một máy chủ EC2 Windows mới? (Chọn hai đáp án.)",
            options: [
                "ID của máy chủ EC2",
                "Amazon Machine Image (AMI)",
                "Loại phiên bản máy chủ (EC2 instance type)",
                "Mật khẩu quản trị viên"
            ],
            correct: [1, 2]
        },
        {
            q: "Câu hỏi 78: Sau khi đăng nhập lần đầu tiên, AWS khuyến nghị hành động nào đối với tài khoản người dùng Root? (Chọn đáp án đúng nhất.)",
            options: [
                "Hạn chế bớt quyền của tài khoản Root",
                "Xóa các khóa truy cập (Access keys) của tài khoản Root",
                "Xóa hoàn toàn tài khoản Root",
                "Thu hồi toàn bộ quyền đăng nhập Root"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 79: Thành phần nào có thể được sử dụng như một tường lửa ảo để bảo vệ các máy chủ Amazon EC2? (Chọn đáp án đúng nhất.)",
            options: ["Nhóm bảo mật (Security group)", "Tất cả các đáp án trên", "Internet Gateway", "AMI"],
            correct: [0]
        },
        {
            q: "Câu hỏi 80: Điều gì xảy ra ngay sau khi bạn tạo mới một VPC? (Chọn đáp án đúng nhất.)",
            options: [
                "Một bảng định tuyến chính (Main route table) được tạo tự động theo mặc định",
                "Một Cổng Internet (Internet Gateway) được tạo tự động",
                "Ba mạng con được tự động tạo trong một AZ",
                "Ba mạng con được tạo chia đều cho các AZ"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 81: Vùng địa lý nào chứa từ hai Vùng khả dụng (AZs) trở lên? (Chọn đáp án đúng nhất.)",
            options: ["Vị trí biên (Edge location)", "Khu vực AWS (AWS Region)", "Vùng tính toán", "Điểm gốc AWS"],
            correct: [1]
        },
        {
            q: "Câu hỏi 82: Quản trị viên hệ thống có thể bổ sung thêm một lớp bảo mật đăng nhập cho Bảng điều khiển AWS (Console) bằng cách nào?",
            options: [
                "Sử dụng Amazon Cloud Directory",
                "Kiểm tra các vai trò IAM",
                "Bật xác thực đa yếu tố (MFA)",
                "Kích hoạt dịch vụ AWS CloudTrail"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 83: Tại sao AWS lại tiết kiệm chi phí hơn so với các trung tâm dữ liệu truyền thống đối với khối lượng công việc biến động?",
            options: [
                "Máy chủ EC2 được tính phí cố định theo tháng",
                "Chạy đủ máy chủ đáp ứng mức đỉnh mọi lúc",
                "Khách hàng giữ quyền quản trị viên",
                "Máy chủ EC2 có thể được khởi chạy linh hoạt theo nhu cầu thực tế"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 84: Dịch vụ AWS nào cho phép bạn dễ dàng triển khai và quản lý các ứng dụng trên đám mây mà không cần lo lắng về hạ tầng bên dưới?",
            options: ["AWS Config", "Amazon EC2", "AWS OpsWorks", "AWS Elastic Beanstalk"],
            correct: [3]
        },
        {
            q: "Câu hỏi 85: Trong Mô hình trách nhiệm chia sẻ, AWS chịu trách nhiệm cung cấp điều gì? (Chọn đáp án đúng nhất.)",
            options: [
                "Bảo mật ĐẾN đám mây (Security to the cloud)",
                "Bảo mật CỦA đám mây (Security of the cloud)",
                "Bảo mật TRONG đám mây (Security in the cloud)",
                "Bảo mật CHO đám mây (Security for the cloud)"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 86: Khi AWS phát triển quy mô, chi phí vận hành giảm và khoản tiết kiệm này được chuyển lại cho khách hàng dưới dạng giá thấp hơn. Khái niệm này gọi là gì?",
            options: ["Cân bằng cung cầu", "Tối ưu dung lượng EC2", "Tính kinh tế theo quy mô (Economies of scale)", "Nhận thức chi tiêu"],
            correct: [2]
        },
        {
            q: "Câu hỏi 87: Khách hàng có thể truy cập vào đâu để xem chi tiết hoạt động thanh toán hóa đơn EC2 từ 3 tháng trước? (Chọn đáp án đúng nhất.)",
            options: [
                "Bảng điều khiển AWS Trusted Advisor",
                "Bảng điều khiển Amazon EC2",
                "Trình khám phá chi phí AWS (AWS Cost Explorer)",
                "Nhật ký CloudTrail lưu trong S3"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 88: Ứng dụng của bạn cần 4 máy chủ chạy ổn định liên tục. Riêng ngày cuối tháng, lưu lượng truy cập tăng gấp 3 lần (cần 12 máy chủ). Phương án nào tối ưu chi phí nhất?",
            options: [
                "Chạy 4 máy chủ Reserved Instances liên tục, thêm 8 máy chủ On-Demand vào ngày cuối tháng",
                "Chạy 4 máy chủ On-Demand liên tục, thêm 8 máy chủ On-Demand vào ngày cuối tháng",
                "Chạy 4 máy chủ On-Demand liên tục, thêm 8 máy chủ Reserved Instances",
                "Chạy cố định 12 máy chủ Reserved Instances liên tục cả tháng"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 89: Dịch vụ đám mây AWS nào phù hợp nhất để phân tích dữ liệu quy mô lớn bằng ngôn ngữ SQL tiêu chuẩn và kết nối với các công cụ BI hiện có?",
            options: ["Amazon S3 Glacier", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"],
            correct: [3]
        },
        {
            q: "Câu hỏi 90: Những đặc điểm nào sau đây là tính năng của Amazon EC2 Auto Scaling? (Chọn ba đáp án.)",
            options: [
                "Phản ứng với điều kiện thay đổi bằng cách tự động thêm hoặc hủy các máy chủ",
                "Duy trì một số lượng máy chủ chạy tối thiểu theo cấu hình",
                "Gửi thông báo đẩy đến điện thoại",
                "Khởi chạy các máy chủ mới từ một AMI được chỉ định",
                "Chỉ hỗ trợ mở rộng quy mô động"
            ],
            correct: [0, 1, 3]
        },
        {
            q: "Câu hỏi 91: Đúng hay sai? AWS cung cấp miễn phí một số dịch vụ như VPC, IAM, Consolidated Billing, Elastic Beanstalk, Auto Scaling. Tuy nhiên bạn vẫn bị tính phí cho các tài nguyên khác sử dụng kèm.",
            options: ["Đúng", "Sai"],
            correct: [0]
        },
        {
            q: "Câu hỏi 92: Điều nào sau đây KHÔNG PHẢI là lợi ích của điện toán đám mây AWS? (Chọn hai đáp án.)",
            options: [
                "Độ trễ cao (High latency)",
                "Tính sẵn sàng cao (High availability)",
                "Nhiều chu kỳ mua sắm phức tạp (Multiple procurement cycles)",
                "Tài nguyên linh hoạt tạm thời",
                "Cơ sở dữ liệu có khả năng chịu lỗi"
            ],
            correct: [0, 2]
        },
        {
            q: "Câu hỏi 93: Nếu bạn phát triển một ứng dụng yêu cầu cơ sở dữ liệu có tốc độ phản hồi cực nhanh, khả năng mở rộng linh hoạt và lược đồ dữ liệu linh hoạt (NoSQL), bạn nên chọn dịch vụ nào?",
            options: ["Amazon DynamoDB", "Amazon RDS", "Amazon ElastiCache", "Amazon Redshift"],
            correct: [0]
        },
        {
            q: "Câu hỏi 94: Trường hợp sử dụng nào sau đây phù hợp nhất với việc áp dụng Amazon RDS?",
            options: [
                "Tốc độ đọc ghi cực lớn hàng triệu query/giây",
                "Các giao dịch phức tạp yêu cầu tính toàn vẹn (Complex transactions)",
                "Tất cả các đáp án trên",
                "Chỉ thực hiện các yêu cầu GET/PUT đơn giản"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 95: Dịch vụ nào sau đây là một dịch vụ tính toán (Compute Service)? (Chọn đáp án đúng nhất.)",
            options: ["Amazon CloudFront", "Amazon Redshift", "Amazon EC2", "Amazon VPC", "Amazon S3"],
            correct: [2]
        },
        {
            q: "Câu hỏi 96: AWS Trusted Advisor cung cấp các khuyến nghị tối ưu hóa thuộc 5 danh mục nào?",
            options: [
                "Bảo mật, Khả năng chịu lỗi, Tính sẵn sàng cao, Kết nối, Giới hạn dịch vụ",
                "Hiệu suất, Tối ưu chi phí, Bảo mật, Khả năng chịu lỗi, Giới hạn dịch vụ",
                "Hiệu suất, Tối ưu chi phí, Kiểm soát truy cập, Kết nối, Bảo mật",
                "Bảo mật, Kiểm soát truy cập, Tính sẵn sàng cao, Hiệu suất, Giới hạn dịch vụ"
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 97: Trong Elastic Load Balancing, khi bộ cân bằng tải phát hiện một mục tiêu (target) không lành mạnh, điều gì sẽ xảy ra? (Chọn ba đáp án.)",
            options: [
                "Tự động chuyển hướng lưu lượng truy cập sang các mục tiêu lành mạnh khác",
                "Kích hoạt cảnh báo chuông báo động",
                "Tiếp tục phân phối lưu lượng khi được khởi động lại thủ công",
                "Ngừng gửi lưu lượng truy cập đến mục tiêu lỗi đó",
                "Tự động gửi lại lưu lượng khi phát hiện mục tiêu đó đã hoạt động bình thường trở lại"
            ],
            correct: [0, 3, 4]
        },
        {
            q: "Câu hỏi 98: Phát biểu nào sau đây về các Vùng khả dụng (Availability Zones) là KHÔNG đúng? (Chọn đáp án đúng nhất.)",
            options: [
                "Vùng khả dụng chứa một hoặc nhiều trung tâm dữ liệu vật lý",
                "Các Vùng khả dụng kết nối với nhau bằng đường truyền riêng tốc độ cao",
                "Một trung tâm dữ liệu vật lý có thể dùng chung cho nhiều Vùng khả dụng khác nhau",
                "Các Vùng khả dụng được thiết kế cách ly sự cố lẫn nhau"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 99: Trong Amazon DynamoDB, thao tác truy vấn (Query operation) cho phép bạn làm những gì?",
            options: [
                "Tất cả các khả năng nêu trên",
                "Truy vấn bảng bằng khóa phân vùng và bộ lọc khóa sắp xếp",
                "Truy xuất hiệu quả các mục từ bảng hoặc chỉ mục phụ",
                "Truy vấn bất kỳ chỉ mục phụ (secondary index) nào của bảng"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 100: Đúng hay sai? Gói AWS Free Tier cung cấp các dịch vụ KHÔNG GIỚI HẠN hoàn toàn miễn phí cho khách hàng mới trong 12 tháng.",
            options: ["Đúng", "Sai"],
            correct: [1]
        }
    ],

    // ĐỀ 7: ĐIỆN TOÁN ĐÁM MÂY VÀ ỨNG DỤNG C171 - HUMG (45 CÂU)
    7: [
        {
            q: "Câu 1: Khi sử dụng đám mây công cộng khách hàng phải trả những chi phí nào?",
            options: [
                "Chi phí cho các tài nguyên sử dụng",
                "Chi phí về quản lý phần mềm",
                "Chi phí về quản lý phần cứng",
                "Chi phí về bảo trì hệ thống"
            ],
            correct: [0]
        },
        {
            q: "Câu 2: Điện toán đám mây còn gọi là gì?",
            options: [
                "Điện toán máy chủ vật lý",
                "Điện toán máy chủ ảo",
                "Không có đáp án đúng",
                "Điện toán lưới"
            ],
            correct: [1]
        },
        {
            q: "Câu 3: Đâu không phải là mô hình dịch vụ của đám mây",
            options: [
                "Software as a service",
                "System administration as a service",
                "Infrastructure as a service",
                "Platform as a service"
            ],
            correct: [1]
        },
        {
            q: "Câu 4: Giả sử công ty của bạn cần xây dựng hệ thống Email cho toàn bộ nhân viên và quản lý thông tin Email như một diễn đàn. Khi đó, cần lựa chọn dạng dịch vụ nào để triển khai?",
            options: [
                "Private cloud",
                "Public cloud",
                "Community cloud",
                "Hybrid cloud"
            ],
            correct: [0]
        },
        {
            q: "Câu 5: Đâu là thành phần giám sát máy ảo",
            options: [
                "Không có đáp án nào đúng",
                "VMWare Workstation",
                "VMWare",
                "Virtual machine monitor"
            ],
            correct: [3]
        },
        {
            q: "Câu 6: Microsoft Azure cung cấp dịch vụ nào để phát triển và triển khai ứng dụng web và di động?",
            options: [
                "Azure Functions.",
                "Azure Logic Apps.",
                "Azure IoT.",
                "Azure DevOps."
            ],
            correct: [3]
        },
        {
            q: "Câu 7: Dịch vụ PaaS là viết tắt của từ gì?",
            options: [
                "Plat as a Service",
                "Platform as a Server",
                "Platform and a Service",
                "Platform as a Service"
            ],
            correct: [3]
        },
        {
            q: "Câu 8: Khi nào nên lựa chọn dịch vụ đám mây công cộng",
            options: [
                "Khi người dùng có ứng dụng SaaS từ một nhà cung cấp đám mây lớn",
                "Khi người dùng có ứng dụng IaaS từ một nhà cung cấp đám mây lớn",
                "Cả 3 đáp án đều đúng",
                "Khi người dùng có ứng dụng PaaS từ một nhà cung cấp đám mây lớn"
            ],
            correct: [0]
        },
        {
            q: "Câu 9: AWS là viết tắt của gì?",
            options: [
                "Advanced Web Services.",
                "Automated Web Solutions.",
                "Amazon Web Services.",
                "Amazon Web Systems."
            ],
            correct: [2]
        },
        {
            q: "Câu 10: Ai là người quản lý hạ tầng của đám mây riêng",
            options: [
                "Nhà cung cấp dịch vụ",
                "Không có đáp án nào đúng",
                "Doanh nghiệp",
                "Kết hợp giữa nhà cung cấp dịch vụ và doanh nghiệp"
            ],
            correct: [2]
        },
        {
            q: "Câu 11: Phát biểu nào sau đây là chính xác nhất về hình mẫu của điện toán đám mây?",
            options: [
                "Không phát biểu nào đúng",
                "Thông tin được lưu trữ thường trực tại các máy chủ trên Internet và chỉ được lưu trữ thường trực ở các máy khách",
                "Thông tin được lưu trữ tạm thời tại các máy chủ trên Internet và được lưu trữ thường trực ở các máy khách",
                "Thông tin được lưu trữ thường trực tại các máy chủ trên Internet và chỉ được lưu trữ tạm thời ở các máy khách"
            ],
            correct: [3]
        },
        {
            q: "Câu 12: Khi bạn cần bảo mật dữ liệu lớn và yêu cầu tính sẵn sàng cao, dịch vụ nào sau đây của AWS thích hợp nhất?",
            options: [
                "Amazon S3 (Simple Storage Service).",
                "Amazon RDS (Relational Database Service).",
                "Amazon EC2 (Elastic Compute Cloud).",
                "Amazon CloudFront."
            ],
            correct: [0]
        },
        {
            q: "Câu 13: AWS S3 là gì?",
            options: [
                "Dịch vụ phân tích dữ liệu.",
                "Dịch vụ lưu trữ dữ liệu",
                "Dịch vụ triển khai và mở rộng ứng dụng web.",
                "Dịch vụ quản lý tên miền và DNS."
            ],
            correct: [1]
        },
        {
            q: "Câu 14: AWS VPC (Virtual Private Cloud) cung cấp gì?",
            options: [
                "Một môi trường để phân tích dữ liệu.",
                "Một khu vực riêng tư để quản lý cơ sở dữ liệu.",
                "Một mạng riêng ảo để triển khai và quản lý tài nguyên máy chủ",
                "Một môi trường ảo để triển khai ứng dụng web."
            ],
            correct: [2]
        },
        {
            q: "Câu 15: Đâu là những lo ngại về bảo mật trong việc thiết kế kiểm soát liên quan đến việc truy cập mạng trong điện toán đám mây?",
            options: [
                "Quyền truy cập của quản trị viên",
                "Dịch vụ tự phục vụ và truy cập qua mạng rộng rãi",
                "Truy cập mạng rộng rãi",
                "Dịch vụ tự phục vụ"
            ],
            correct: [1]
        },
        {
            q: "Câu 16: Khi bạn cần một nền tảng phân tích dữ liệu mạnh mẽ để thực hiện phân tích dữ liệu doanh nghiệp, dịch vụ nào sau đây phù hợp nhất?",
            options: [
                "Microsoft Azure Virtual Machines",
                "Amazon EC2 (Elastic Compute Cloud)",
                "AWS Lambda",
                "Google BigQuery"
            ],
            correct: [3]
        },
        {
            q: "Câu 17: Đặc điểm nào sau đây chứng tỏ một dịch vụ là IaaS?",
            options: [
                "Cung cấp một nền tảng phát triển và triển khai ứng dụng.",
                "Cung cấp các tài nguyên máy chủ, lưu trữ và mạng có khả năng mở rộng.",
                "Cung cấp ứng dụng và dịch vụ cơ bản như hệ điều hành và cơ sở dữ liệu.",
                "Cung cấp ứng dụng và dịch vụ hoàn chỉnh cho người dùng cuối."
            ],
            correct: [1]
        },
        {
            q: "Câu 18: Đặc điểm nào không phải của mô hình triển khai Public clouds?",
            options: [
                "Là mô hình triển khai được bên thứ ba cung",
                "Cả 3 đáp án đều sai cả",
                "Hạ tầng do doanh nghiệp quản lý",
                "Không giới hạn người sử dụng"
            ],
            correct: [2]
        },
        {
            q: "Câu 19: Dịch vụ AWS nào sẽ đơn giản hóa quá trình di chuyển cơ sở dữ liệu vào AWS?",
            options: [
                "Amazon EC2",
                "Amazon AppStream 2.0",
                "AWS Database Migration Service (AWS DMS)",
                "AWS Storage Gateway"
            ],
            correct: [2]
        },
        {
            q: "Câu 20: Trong điện toán đám mây, thuật ngữ ảo hóa - Virtualization có ý nghĩa là?",
            options: [
                "Tối ưu hóa việc sử dụng tài nguyên máy tính web",
                "Cải thiện hiệu quả sử dụng các ứng dụng",
                "Tự động tải thêm các nền tảng hạ tầng"
            ],
            correct: [0]
        },
        {
            q: "Câu 22: Đám mây AWS được xây dựng trên mô hình kinh tế nào sau đây?",
            options: [
                "Mô hình trả tiền theo thời gian",
                "Mô hình trả tiền sau",
                "Mô hình trả tiền trước",
                "Mô hình trả tiền theo sử dụng"
            ],
            correct: [3]
        },
        {
            q: "Câu 23: Đâu không phải là đặc tính của điện toán đám mây?",
            options: [
                "Sự truy cập mạng rộng rãi",
                "Tài nguyên được phân tán",
                "Tự phục vụ theo yêu cầu",
                "Tính mềm dẻo"
            ],
            correct: [1]
        },
        {
            q: "Câu 24: Người dùng có thể thuê máy ảo, cấu hình linh hoạt và chạy các ứng dụng, công việc tính toán trên đám mây của AWS qua dịch vụ nào",
            options: [
                "Tất cả các đáp án đều đúng",
                "Amazon Elastic Compute Cloud",
                "AWS Storage Gateway",
                "Amazon AppStream 2.0"
            ],
            correct: [1]
        },
        {
            q: "Câu 25: Dịch vụ nào trong Google Cloud cho phép bạn lưu trữ dữ liệu và chạy các ứng dụng ảo trên nền tảng điện toán đám mây?",
            options: [
                "Google Cloud Pub/Sub.",
                "Google Cloud Dataprep.",
                "Google Cloud Bigtable.",
                "Google Cloud Compute Engine."
            ],
            correct: [3]
        },
        {
            q: "Câu 26: Dịch vụ nào cho phép tạo mạng đám mây riêng ảo",
            options: [
                "Amazon Route 53",
                "AWS Direct Connect",
                "Amazon Virtual Private Cloud",
                "AWS Config"
            ],
            correct: [2]
        },
        {
            q: "Câu 27: Để kết nối với máy chủ ảo của AWS sử dụng dịch vụ nào",
            options: [
                "Amazon Elastic Block Store",
                "Virtual Private Cloud",
                "AWS Systems Manager Fleet Manager",
                "Amazon Cloud Watch"
            ],
            correct: [1]
        },
        {
            q: "Câu 28: Phát biểu nào sai về đám mây cộng cộng?",
            options: [
                "Đám mây của các tổ chức và được tổ chức quản lý trực tiếp",
                "Được xây dựng nhằm mục đích sử dụng công cộng",
                "Là mô hình các dịch vụ đám mây được bên thứ ba cung cấp",
                "Nó tồn tại trên cơ sở của nhà cung cấp đám mây"
            ],
            correct: [0]
        },
        {
            q: "Câu 29: Công cụ lưu trữ trực tuyến OneDrive dành cho sinh viên HUMG cho phép sinh viên mới đăng ký có bao nhiêu khoảng trống",
            options: [
                "5GB",
                "4TB",
                "500MB",
                "1GB"
            ],
            correct: [1]
        },
        {
            q: "Câu 30: Trong các dịch vụ sau, dịch vụ nào là dịch vụ tính toán của nhà cung cấp Amazon",
            options: [
                "Amazon EC2",
                "Amazon VPC",
                "Amazon 53",
                "Amazon CloudFront"
            ],
            correct: [0]
        },
        {
            q: "Câu 31: Google Computer Engine cung cấp giải pháp gì",
            options: [
                "Giải pháp cung cấp nền tảng để phát triển ứng dụng trên đám mây",
                "Giải phảo ảo hóa cho máy chủ vật lý cá nhân",
                "Giải pháp máy chủ ảo trên đám mây cho cá nhân và doanh nghiệp",
                "Giải pháp triển khai đám mây riêng cho doanh nghiệp"
            ],
            correct: [2]
        },
        {
            q: "Câu 32: Tấn công nhằm từ chối dịch vụ DoS được viết tắt từ?",
            options: [
                "Denial of Security.",
                "Denial of Service.",
                "Deny of Service.",
                "Disable of Service."
            ],
            correct: [1]
        },
        {
            q: "Câu 33: Khi bạn muốn kết hợp cả các tài nguyên đám mây với tài nguyên máy chủ truyền thống trong môi trường của bạn, lựa chọn nào sau đây có thể phù hợp nhất",
            options: [
                "Community cloud",
                "Public cloud",
                "Private cloud",
                "Hybrid cloud"
            ],
            correct: [3]
        },
        {
            q: "Câu 34: Public Cloud được hiểu đơn giản là gì?",
            options: [
                "Một dịch vụ điện toán đám mây tiêu chuẩn cung cấp qua mạng Internet",
                "Một kiến trúc đám mây riêng duy trì trong trung tâm dữ liệu doanh nghiệp",
                "Không có đáp án đúng",
                "Một dịch vụ điện toán đám mây cho một cộng đồng nào đó"
            ],
            correct: [0]
        },
        {
            q: "Câu 35: Công cụ nào của Microsoft Azure cho phép bạn tạo và quản lý các máy chủ ảo?",
            options: [
                "Azure Functions.",
                "Azure DevOps.",
                "Azure Virtual Machines.",
                "Azure Logic Apps."
            ],
            correct: [2]
        },
        {
            q: "Câu 36: SQL Azure là gì ?",
            options: [
                "Là dịch vụ cơ sở dữ liệu quan hệ trên máy chủ",
                "Là dịch vụ cơ sở dữ liệu quan hệ của Microsoft trên đám mây",
                "Là dịch vụ cơ sở dữ liệu quan hệ của Microsoft trên máy chủ ảo",
                "Là một phần của Microsoft SQL Server"
            ],
            correct: [1]
        },
        {
            q: "Câu 37: Hạ tầng đám mây bao gồm?",
            options: [
                "Phần vật lý",
                "Phần trừu tượng",
                "Không có đáp án nào đúng",
                "Phần vật lý và phần trừu tượng"
            ],
            correct: [3]
        },
        {
            q: "Câu 38: Các tổ chức phục vụ cộng đồng phù hợp với việc triển khai mô hình đám mây nào?",
            options: [
                "Private cloud",
                "Public cloud",
                "Community cloud",
                "Hybrid cloud"
            ],
            correct: [2]
        },
        {
            q: "Câu 39: Bạn đăng ký một dịch vụ đám mây và nhận được quyền truy cập vào phần mềm Office trực tuyến và không cần cài đặt cấu hình nào. Vậy bạn cần sử dụng dịch vụ vụ nào của đám mây",
            options: [
                "SaaS",
                "PaaS và SaaS",
                "IaaS",
                "PaaS"
            ],
            correct: [0]
        },
        {
            q: "Câu 40: AWS IAM là gì?",
            options: [
                "Dịch vụ quản lý người dùng và quyền truy cập.",
                "Dịch vụ quản lý danh mục công nghệ thông tin (IT).",
                "Dịch vụ phân tích dữ liệu",
                "Dịch vụ lưu trữ dữ liệu."
            ],
            correct: [0]
        },
        {
            q: "Câu 41: Công ty bạn đang làm việc kinh doanh bằng cách cho thuê các máy chủ host làm dịch vụ cho web và email, đây là mô hình kinh doanh dựa trên loại dịch vụ nào?",
            options: [
                "PaaS và IaaS",
                "PaaS",
                "IaaS",
                "SaaS"
            ],
            correct: [3]
        },
        {
            q: "Câu 42: Khi lựa chọn khu vực cho tài nguyên AWS của bạn, yếu tố chính mà bạn nên xem xét là",
            options: [
                "Số lượng máy chủ ảo cần chạy",
                "Tính sẵn sàng cao và giảm thiểu độ trễ",
                "Khoảng cách đến các Edge locations",
                "Yêu cầu bảo mật"
            ],
            correct: [1]
        },
        {
            q: "Câu 43: Khi bạn muốn tạo ra một môi trường đám mây riêng để lưu trữ và quản lý dữ liệu nhạy cảm của công ty mình, bạn nên sử dụng dịch vụ nào?",
            options: [
                "Community cloud",
                "Public cloud",
                "Private cloud",
                "Hybrid cloud"
            ],
            correct: [2]
        },
        {
            q: "Câu 44: HTTPS được viết tắt từ tiếng anh nào",
            options: [
                "HyperText Transfer Protocol Sever",
                "HyperText Transfer Protocol Security",
                "HyperText Transfer Protocol Safe",
                "Hyper Text Transfer Protocol Secure"
            ],
            correct: [3]
        },
        {
            q: "Câu 45: Theo NIST, hiện nay có bao nhiêu mô hình điện toán đám mây được triển khai trong thực tế?",
            options: [
                "4",
                "5",
                "2",
                "3"
            ],
            correct: [0]
        }
    ],
    // ĐỀ 8: AWS PRACTITIONER 8 (20 CÂU)
    8: [
        {
            q: "Câu hỏi 1: Yêu cầu CNTT nào sẽ khiến kiến trúc sư chọn mô hình IaaS (Hạ tầng như một dịch vụ)?",
            options: [
                "Công ty muốn vẫn kiểm soát ứng dụng của mình nhưng không phải quản lý máy chủ và hệ điều hành.",
                "Công ty muốn chạy một phiên bản được quản lý từ Marketplace.",
                "Công ty muốn có mức độ linh hoạt cao nhất đối với tài nguyên CNTT.",
                "Công ty muốn sử dụng dịch vụ email trên nền web."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 2: Kinh tế theo quy mô giúp khách hàng chuyển từ hạ tầng tại chỗ lên Cloud như thế nào?",
            options: [
                "Mở rộng máy chủ theo chiều ngang.",
                "Toàn quyền kiểm soát hạ tầng.",
                "Triển khai tài nguyên trên toàn cầu.",
                "Giảm chi phí biến đổi và mở rộng hạ tầng vượt khả năng tại chỗ."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 3: Phát biểu nào mô tả đúng về AWS Support?",
            options: [
                "Concierge hỗ trợ kỹ thuật nhanh.",
                "Hỗ trợ cho cả môi trường thử nghiệm và hệ thống sản xuất quan trọng.",
                "Mọi gói đều có Technical Account Manager (TAM).",
                "Chỉ có 3 gói: Basic, Business và Enterprise."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 4: AWS Billing Dashboard giúp doanh nghiệp phân tích chi phí như thế nào?",
            options: [
                "Hiển thị chi tiêu từ đầu tháng và các dịch vụ chiếm phần lớn chi phí.",
                "Liệt kê chi phí theo dịch vụ, Region và tài khoản.",
                "Liệt kê các tài khoản hoạt động trong 6 tháng.",
                "Hiển thị mô hình giá và mức Free Tier."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 5: Phát biểu nào đúng về AWS Region?",
            options: [
                "Dữ liệu không chịu quy định địa lý.",
                "Chọn Region gần người dùng giúp giảm độ trễ.",
                "Mọi tài khoản truy cập được tất cả Region.",
                "Tất cả Region được bật mặc định."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 6: Theo mô hình chia sẻ trách nhiệm của AWS, chọn 2 đáp án đúng.",
            options: [
                "AWS quyết định dữ liệu nào cần mã hóa.",
                "AWS chịu trách nhiệm bảo mật vật lý trung tâm dữ liệu.",
                "Khách hàng quản lý phần cứng AWS.",
                "AWS cấu hình Security Group.",
                "Khách hàng quản lý dữ liệu của mình."
            ],
            correct: [1, 4]
        },
        {
            q: "Câu hỏi 7: Trường hợp nào phù hợp với AWS CloudTrail?",
            options: [
                "Theo dõi hoạt động của người dùng trong tài khoản.",
                "Quản lý quyền của nhiều tài khoản.",
                "Quản lý đăng nhập website.",
                "Chống tấn công DDoS."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 8: Khả năng nào là của Amazon VPC?",
            options: [
                "Là khu vực cách ly vật lý.",
                "Có thể trải rộng nhiều Availability Zone.",
                "Thuộc nhiều Region cùng lúc.",
                "Thay đổi dải IP sau khi tạo."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 9: Khi nào nên dùng Route 53 với Latency Routing?",
            options: [
                "Điều hướng đến Region có hiệu năng nhanh nhất.",
                "A/B Testing.",
                "Chuyển hướng khi website lỗi.",
                "Định tuyến theo quyền phân phối."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 10: Có tệp mới trong S3 thì chạy script với ít tài nguyên nhất bằng gì?",
            options: [
                "Amazon ECS",
                "Amazon EC2",
                "AWS Lambda",
                "Batch Job trên Spot Instance"
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 11: Security Group có vai trò gì với EC2?",
            options: [
                "Quản lý khóa kết nối.",
                "Kiểm soát subnet.",
                "Xác định IAM Role.",
                "Thiết lập quy tắc kiểm soát lưu lượng vào/ra của EC2."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 12: Trường hợp nào phù hợp với Amazon EFS?",
            options: [
                "Nhiều EC2 cùng đọc và ghi vào một hệ thống tệp NFS.",
                "Xây dựng Data Lake.",
                "Lưu trữ tạm thời.",
                "Lưu trữ website."
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 13: Chính sách Lifecycle nào tiết kiệm chi phí nhất cho file PDF lưu 1 năm?",
            options: [
                "Chuyển sang Standard-IA sau 7 ngày.",
                "Chuyển ngược về Standard.",
                "Chuyển sang Glacier sau 7 ngày, xóa sau 365 ngày.",
                "Chuyển sang One Zone-IA rồi xóa."
            ],
            correct: [2]
        },
        {
            q: "Câu hỏi 14: Lưu hàng tỷ sự kiện nhỏ mỗi ngày để phân tích nên dùng gì?",
            options: [
                "Amazon S3",
                "EC2 Instance Store",
                "Amazon EBS",
                "Amazon ECS"
            ],
            correct: [0]
        },
        {
            q: "Câu hỏi 15: Website thương mại điện tử cần lưu metadata phi cấu trúc thì dùng CSDL nào?",
            options: [
                "Amazon Aurora",
                "Amazon Redshift",
                "Amazon RDS",
                "Amazon DynamoDB"
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 16: Trường hợp nào phù hợp với Amazon Redshift?",
            options: [
                "CSDL giao dịch.",
                "Lưu ảnh và video.",
                "Dữ liệu phi cấu trúc.",
                "Kho dữ liệu phục vụ phân tích (Data Warehouse)."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 17: Nguyên tắc của trụ cột Security trong AWS Well-Architected là gì?",
            options: [
                "Phân tán quyền.",
                "Giám sát thủ công.",
                "Chỉ triển khai khi hết rủi ro.",
                "Áp dụng bảo mật ở mọi lớp kiến trúc."
            ],
            correct: [3]
        },
        {
            q: "Câu hỏi 18: High Availability là gì?",
            options: [
                "Xác suất hệ thống hoạt động trong một khoảng thời gian.",
                "Hệ thống vẫn hoạt động dù bị suy giảm một phần mà không ngừng hoàn toàn.",
                "Hệ thống cung cấp đúng chức năng khi người dùng cần.",
                "Tỷ lệ thời gian hoạt động chia cho số lần lỗi."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 19: Khi nào nên dùng Network Load Balancer (NLB)?",
            options: [
                "Định tuyến tầng 7.",
                "Cân bằng tải hàng triệu yêu cầu mỗi giây với độ trễ thấp.",
                "Định tuyến theo nội dung yêu cầu.",
                "Cân bằng tải gRPC."
            ],
            correct: [1]
        },
        {
            q: "Câu hỏi 20: ELB được dùng với EC2 Auto Scaling như thế nào? (Chọn 2)",
            options: [
                "Phân phối lưu lượng giữa các EC2 trong Auto Scaling Group.",
                "Kích hoạt sự kiện Auto Scaling khi đạt ngưỡng.",
                "Kiểm tra tình trạng hoạt động (Health Check) của các EC2 mới.",
                "Thiết lập số lượng tối thiểu và tối đa.",
                "Tự động thêm EC2 khi tải tăng."
            ],
            correct: [0, 2]
        }
    ],
    9: [
    {
      q: "Câu hỏi 1: Những ưu điểm nào của điện toán đám mây đối với một công ty chuyển từ mô hình điện toán tại chỗ (on-premises) truyền thống? (Chọn HAI.)",
      options: [
        "Các tài nguyên có thể được tạo, mở rộng quy mô, thu nhỏ quy mô, hoặc hủy bỏ dựa trên nhu cầu.",
        "Tất cả các giấy phép máy chủ tại chỗ có thể dễ dàng chuyển giao và quản lý tập trung trên đám mây.",
        "Công ty có thể đầu tư nhiều hơn vào chi phí cố định (chi phí vốn) và giảm chi phí biến đổi của họ.",
        "Công ty có thể tập trung ít hơn vào cơ sở hạ tầng và tập trung nhiều hơn vào việc tạo sự khác biệt cho doanh nghiệp.",
        "Các đội ngũ CNTT có thể đưa ra quyết định về năng lực trước khi triển khai ứng dụng để họ luôn có năng lực dư thừa."
      ],
      correct: [0, 3]
    },
    {
      q: "Câu hỏi 2: Lợi ích kinh tế theo quy mô (economies of scale) giúp ích như thế nào cho các khách hàng di chuyển sang điện toán đám mây từ điện toán tại chỗ?",
      options: [
        "Khách hàng có thể mở rộng quy mô máy chủ theo chiều ngang.",
        "Khách hàng có toàn quyền kiểm soát cơ sở hạ tầng của họ.",
        "Khách hàng có thể đạt được chi phí biến đổi thấp hơn và mở rộng quy mô cơ sở hạ tầng vượt quá những gì có thể thực hiện tại chỗ.",
        "Khách hàng có thể triển khai các tài nguyên trên toàn cầu."
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 3: Phát biểu nào mô tả chính xác về mô hình tính giá của AWS?",
      options: [
        "Truyền dữ liệu đầu ra (outbound) không bị tính phí.",
        "Chiết khấu dựa trên sản lượng sử dụng sẵn có khi mức độ sử dụng tăng lên (đối với một số dịch vụ).",
        "Các công ty có thể đặt trước năng lực cho một số dịch vụ, nhưng điều đó không ảnh hưởng đến chi phí.",
        "Các công ty phải ký hợp đồng dài hạn để có thể chỉ trả tiền cho những gì họ sử dụng."
      ],
      correct: [1]
    },
    {
      q: "Câu hỏi 4: Bảng điều khiển thanh toán AWS (AWS Billing Dashboard) giúp các công ty phân tích mức độ sử dụng AWS của họ để tìm ra các cơ hội tiết kiệm chi phí tiềm năng như thế nào?",
      options: [
        "Bảng điều khiển thanh toán hiển thị trạng thái chi tiêu AWS từ đầu tháng đến nay và các dịch vụ AWS chiếm phần lớn tổng chi tiêu.",
        "Bảng điều khiển thanh toán liệt kê các chi phí phát sinh trong tháng qua theo dịch vụ, theo Vùng AWS (AWS Region), và theo các tài khoản liên kết.",
        "Bảng điều khiển thanh toán hiển thị các mô hình định giá cho tất cả các dịch vụ AWS được sử dụng trong tài khoản của bạn và vị trí mức độ sử dụng của bạn trong Gói miễn phí AWS (AWS Free Tier).",
        "Bảng điều khiển thanh toán liệt kê tất cả các tài khoản AWS có hoạt động trong 6 tháng qua và tóm tắt chi tiêu cho từng tài khoản."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 5: Phát biểu nào về các vị trí biên (edge locations) là đúng?",
      options: [
        "Bộ đệm biên vùng (Regional edge caches) được sử dụng để lưu bộ đệm dữ liệu được cập nhật thường xuyên và phải được làm mới liên tục.",
        "Các điểm hiện diện (points of presence) của AWS cung cấp hai đến ba vị trí biên trên mỗi Vùng (Region).",
        "Mạng lưới toàn cầu của AWS bao gồm một số lượng lớn bộ đệm biên vùng và một số lượng nhỏ hơn các vị trí biên để phân phối nội dung đến người dùng.",
        "Amazon CloudFront sử dụng các vị trí biên (edge locations) và bộ đệm biên vùng (Regional edge caches) để phân phối nội dung với độ trễ thấp hơn."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 6: Quản trị viên tài khoản AWS muốn cấp quyền truy cập chéo tài khoản tạm thời cho phép người dùng bên ngoài truy cập vào các tài nguyên cụ thể trong tài khoản của họ. Hành động nào sẽ phù hợp với thực hành tốt nhất (best practice) về việc sử dụng các phiên tạm thời?",
      options: [
        "Tạo một vai trò AWS Identity and Access Management (IAM role) mà người dùng bên ngoài có thể đảm nhận (assumed) và cấp cho vai trò đó quyền đối với các tài nguyên cụ thể.",
        "Tạo một tài khoản người dùng AWS Identity and Access Management (IAM user) mới cho mỗi người dùng cần truy cập.",
        "Tạo một chính sách AWS Identity and Access Management (IAM policy) cho phép người dùng bên ngoài truy cập vào các tài nguyên cụ thể.",
        "Tạo một nhóm AWS Identity and Access Management (IAM group), cấp quyền tài nguyên cho nhóm, sau đó thêm người dùng IAM vào nhóm."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 7: Một công ty phải tạo báo cáo về bất kỳ thay đổi nào đối với cài đặt thể hiện Amazon EC2 của mình. Họ nên sử dụng dịch vụ AWS nào?",
      options: [
        "AWS Artifact",
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Config"
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 8: Lựa chọn nào mô tả một khả năng của đám mây riêng ảo Amazon (Amazon VPCs)?",
      options: [
        "Chúng có thể trải rộng trên nhiều Khu vực sẵn sàng (Availability Zones).",
        "Chúng có thể được cấu hình như một phần độc lập về mặt vật lý của Đám mây AWS.",
        "Chúng có thể thuộc về nhiều Vùng AWS (AWS Regions).",
        "Chúng có thể thay đổi dải địa chỉ theo ý muốn sau khi tạo."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 9: Cấu hình nào đại diện cho việc sử dụng hợp lệ các nhóm bảo mật (security groups) trong một đám mây riêng ảo (VPC)?",
      options: [
        "Giới hạn lưu lượng đầu ra (outbound traffic) từ một thể hiện Amazon EC2 trong VPC đến một máy chủ cơ sở dữ liệu cụ thể.",
        "Giới hạn truy cập đầu vào (inbound access) vào phân mạng riêng (private subnet) của VPC.",
        "Đặt một quy tắc từ chối (deny rule) ngăn cản lưu lượng đầu ra từ một thể hiện Amazon EC2 trong VPC.",
        "Đặt một quy tắc từ chối ngăn cản truy cập vào phân mạng từ internet công cộng."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 10: Một nhà phát triển đang thử nghiệm một mẫu thử nghiệm trên Amazon EC2. Các thể hiện bị chấm dứt sau khi thử nghiệm, nhưng ứng dụng yêu cầu tính toán không bị gián đoạn trong khi xử lý. Loại định giá thể hiện Amazon EC2 nào đáp ứng nhu cầu với chi phí thấp nhất?",
      options: [
        "Thể hiện đặt trước (Reserved Instance)",
        "Thể hiện Spot (Spot Instance)",
        "Thể hiện theo yêu cầu (On-Demand Instance)",
        "Thể hiện đặt trước theo lịch trình (Scheduled Reserved Instance)"
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 11: Một công ty có một tập hợp các công việc xử lý dữ liệu lớn trong Amazon Simple Queue Service (Amazon SQS) cần nhiều năng lực tính toán. Mô hình định giá thể hiện Amazon EC2 nào sẽ đáp ứng nhu cầu với chi phí thấp nhất có thể?",
      options: [
        "Thể hiện theo yêu cầu (On-Demand Instance)",
        "Thể hiện đặt trước (Reserved Instance)",
        "Thể hiện Spot (Spot Instance)",
        "Thể hiện đặt trước theo lịch trình (Scheduled Reserved Instance)"
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 12: Một nhà phát triển muốn sử dụng Amazon Elastic Block Store (Amazon EBS) cho ứng dụng của họ. Họ nên thực hiện hành động nào?",
      options: [
        "Gắn ổ đĩa Amazon EBS vào nhiều thể hiện Amazon EC2 ở nhiều Khu vực sẵn sàng (Availability Zones).",
        "Sao lưu ổ đĩa Amazon EBS bằng cách sử dụng các Bản ảnh chụp (Snapshots).",
        "Sao chép (replicate) ổ đĩa Amazon EBS sang một Khu vực sẵn sàng khác.",
        "Gắn ổ đĩa Amazon EBS vào một thể hiện Amazon EC2."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 13: Một công ty tải các biểu mẫu PDF lên Amazon S3 và phải lưu trữ trong 1 năm. Các biểu mẫu hiếm khi được truy cập sau 1 tuần, nhưng chúng phải có sẵn trong vòng 1 ngày khi được yêu cầu. Chính sách vòng đời (lifecycle policy) nào tiết kiệm chi phí nhất cho nhu cầu của họ?",
      options: [
        "Chuyển các đối tượng từ Amazon S3 Standard sang Amazon S3 Standard-Infrequent Access sau 7 ngày.",
        "Chuyển các đối tượng từ Amazon S3 Standard sang Amazon S3 One Zone-Infrequent Access sau 7 ngày. Xóa các đối tượng sau 365 ngày.",
        "Chuyển các đối tượng từ Amazon Standard-Infrequent Access sang Amazon S3 Standard sau 1 tuần.",
        "Chuyển các đối tượng từ Amazon S3 Standard sang Amazon S3 Glacier sau 7 ngày. Xóa chúng sau 365 ngày."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 14: Kịch bản nào mô tả một trường hợp sử dụng tốt cho lưu trữ Amazon S3 Standard?",
      options: [
        "Chia sẻ một hệ thống tập tin NFS",
        "Chạy một cơ sở dữ liệu quan hệ",
        "Đóng vai trò như một bộ lưu trữ thể hiện EC2 (EC2 instance store).",
        "Lưu trữ các hình ảnh của trang web (Hosting website images)"
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 15: Lựa chọn nào là trách nhiệm của công ty khi chạy Amazon RDS?",
      options: [
        "Tối ưu hóa ứng dụng (Application optimization)",
        "Vá lỗi hệ điều hành (Operating system patching)",
        "Cài đặt hệ điều hành (Operating system installation)",
        "Vá lỗi phần mềm cơ sở dữ liệu (Database software patching)"
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 16: Kịch bản nào là phù hợp cho Amazon Redshift?",
      options: [
        "Một công ty cần một cơ sở dữ liệu để quản lý dữ liệu phi cấu trúc.",
        "Một công ty cần một cơ sở dữ liệu quan hệ cho một cơ sở dữ liệu giao dịch nghiệp vụ.",
        "Một công ty cần một kho dữ liệu (data warehouse) để hỗ trợ các ứng dụng phân tích.",
        "Một công ty cần lưu trữ khối lượng lớn các tập tin hình ảnh và video truyền thông hỗn hợp."
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 17: Phát biểu nào phản ánh nguyên tắc thiết kế của trụ cột Bảo mật (Security pillar) trong Khung kiến trúc tối ưu AWS (AWS Well-Architected Framework)?",
      options: [
        "Phi tập trung hóa quản lý phân quyền.",
        "Đảm bảo rằng nhân viên đang chủ động giám sát các rủi ro tiềm ẩn một cách thủ công.",
        "Không triển khai giải pháp vào môi trường thực tế (production) cho đến khi bạn chắc chắn rằng không có rủi ro bảo mật nào.",
        "Áp dụng bảo mật ở tất cả các tầng của một kiến trúc."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 18: Đối với loại trường hợp sử dụng nào, mức độ sẵn sàng đạt 2 số 9 (99%) thường là chấp nhận được?",
      options: [
        "Xử lý theo lô (Batch processing)",
        "Các giao dịch ATM",
        "Thương mại trực tuyến",
        "Các ứng dụng Internet vạn vật (IoT)"
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 19: Những thông tin nào BẮT BUỘC phải được cấu hình cho các thể hiện Amazon EC2 sẽ là một phần của nhóm Amazon EC2 Auto Scaling? (Chọn HAI.)",
      options: [
        "Dung lượng lưu trữ (Storage volume)",
        "Các chỉ số của nhóm Amazon EC2 Auto Scaling",
        "Loại thể hiện Amazon EC2 (Amazon EC2 instance type)",
        "ID của một Bản ảnh máy AWS (AMI)",
        "Danh sách kiểm soát truy cập mạng (ACL)"
      ],
      correct: [2, 3]
    },
    {
      q: "Câu hỏi 20: Phát biểu nào về AWS Auto Scaling là đúng?",
      options: [
        "AWS Auto Scaling và Amazon EC2 Auto Scaling là hai thuật ngữ đồng nghĩa.",
        "Bạn có thể sử dụng Amazon EC2 Auto Scaling hoặc AWS Auto Scaling, nhưng không thể dùng cả hai.",
        "AWS Auto Scaling có thể được sử dụng để tự động mở rộng quy mô cơ sở dữ liệu Amazon RDS.",
        "AWS Auto Scaling có thể được sử dụng để tự động mở rộng quy mô các bảng và chỉ mục Amazon DynamoDB."
      ],
      correct: [3]
    }
  ],
  10: [
    {
      q: "Câu hỏi 1: Điện toán đám mây cải thiện khả năng của một công ty trong việc cung cấp các tài nguyên nhằm đáp ứng nhu cầu năng lực như thế nào so với điện toán tại chỗ (on-premises)?",
      options: [
        "Các tài nguyên đám mây có thể trải qua các đỉnh và đáy trong việc sử dụng.",
        "Các tài nguyên đám mây có thể được khóa ở cấp độ tài nguyên.",
        "Các tài nguyên đám mây có thể được dự báo chi phí.",
        "Các tài nguyên đám mây có thể mở rộng lên hoặc thu nhỏ xuống dựa trên nhu cầu."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 2: Những phát biểu nào về cách một công ty sẽ sử dụng AWS Organizations là chính xác? (Chọn HAI.)",
      options: [
        "Một công ty có thể hợp nhất và quản lý tập trung nhiều tài khoản AWS.",
        "Một công ty chỉ có thể quản lý AWS Organizations thông qua AWS Management Console.",
        "Một công ty có thể hưởng lợi từ các khoản chiết khấu theo sản lượng với tính năng thanh toán hợp nhất (consolidated billing).",
        "Một công ty có thể sử dụng AWS Organizations để tạo các nhóm bảo mật (security groups) kiểm soát truy cập vào các tài nguyên.",
        "Một công ty có thể sử dụng tính năng quản lý danh tính và truy cập (IAM) hợp nhất của AWS Organizations để thay thế hệ thống IAM hiện có cho một tài khoản riêng lẻ."
      ],
      correct: [0, 2]
    },
    {
      q: "Câu hỏi 3: Kịch bản nào mô tả một trường hợp sử dụng cho AWS CloudTrail?",
      options: [
        "Một quản trị viên tài khoản muốn kiểm soát tập trung các quyền truy cập cho các nhóm tài khoản.",
        "Một quản trị viên tài khoản muốn có khả năng theo dõi hoạt động của người dùng trên tài khoản của họ.",
        "Một quản trị viên hệ thống muốn bảo vệ ứng dụng web của họ khỏi các cuộc tấn công từ chối dịch vụ (denial of service attacks).",
        "Một nhà phát triển muốn kiểm soát việc đăng nhập của người dùng vào trang web của họ."
      ],
      correct: [1]
    },
    {
      q: "Câu hỏi 4: Một quản trị viên mạng muốn chạy ứng dụng web thương mại điện tử của họ trên một đám mây riêng ảo (VPC). Bước nào là một phần của việc thiết lập VPC? (Chọn HAI.)",
      options: [
        "Gắn VPC vào một nhóm bảo mật (security group).",
        "Xóa tuyến đường nội bộ (local route) trong bảng tuyến đường (route table).",
        "Xác định dải địa chỉ IP cho VPC.",
        "Tạo bảng tuyến đường chính (main route table).",
        "Tạo các phân mạng riêng (private subnets) và phân mạng công cộng (public subnets)."
      ],
      correct: [2, 4]
    },
    {
      q: "Câu hỏi 5: Phát biểu nào mô tả chính xác về mạng phân phối nội dung (CDN)?",
      options: [
        "Một CDN là một nhóm các máy chủ theo Vùng (Regional group of servers).",
        "Một CDN tạo ra các kết nối nhanh giữa các máy chủ gốc (origin servers).",
        "Một CDN lưu bộ đệm (cache) cho các tệp được yêu cầu thường xuyên.",
        "Một CDN đẩy nhanh tốc độ phân giải tên miền cho các máy chủ ứng dụng."
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 6: Phát biểu nào về Amazon Elastic Block Store (Amazon EBS) là đúng?",
      options: [
        "Các ổ đĩa Amazon EBS được tự động sao chép qua nhiều Khu vực sẵn sàng (Availability Zones).",
        "Các ổ đĩa Amazon EBS không thể thay đổi kích thước.",
        "Các ổ đĩa Amazon EBS không được khuyến nghị lưu trữ cho dữ liệu yêu cầu cập nhật thường xuyên.",
        "Các ổ đĩa Amazon EBS tồn tại độc lập với các thể hiện Amazon EC2 mà chúng được gắn vào."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 7: Phát biểu nào về bảo mật của Amazon S3 Glacier là chính xác?",
      options: [
        "Quyền truy cập vào Amazon S3 Glacier có thể được quản lý bằng các chính sách AWS Identity and Access Management (IAM).",
        "Mã hóa ứng dụng phải được khởi tạo trên các đối tượng được lưu trữ vào Amazon S3 Glacier bằng cách sử dụng AWS Management Console hoặc lập trình.",
        "Đối với tất cả các thao tác và tương tác với Amazon S3 Glacier, bạn có thể sử dụng AWS Management Console.",
        "Dữ liệu trong Amazon S3 Glacier là công khai theo mặc định."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 8: Phát biểu nào phản ánh một nguyên tắc thiết kế của trụ cột Độ tin cậy (Reliability pillar) trong Khung kiến trúc tối ưu AWS (AWS Well-Architected Framework)?",
      options: [
        "Mở rộng quy mô theo chiều dọc (scale vertically) sang các loại thể hiện lớn nhất mà ngân sách của bạn cho phép dựa trên dự đoán tốt nhất của bạn về năng lực.",
        "Thay thế một tài nguyên lớn bằng nhiều tài nguyên nhỏ hơn, và phân phối các yêu cầu trên các tài nguyên nhỏ hơn này.",
        "Không triển khai mã vào môi trường thực tế (production) cho đến khi bạn chắc chắn rằng nó không thể thất bại.",
        "Hạn chế tự động hóa khi cập nhật cơ sở hạ tầng."
      ],
      correct: [1]
    },
    {
      q: "Câu hỏi 9: Loại cảnh báo nào có thể được cung cấp bởi AWS Trusted Advisor?",
      options: [
        "Cảnh báo về truy cập trái phép trong một tài khoản AWS",
        "Cảnh báo rằng người dùng AWS Identity and Access Management (IAM) đã yêu cầu thay đổi hạn ngạch dịch vụ (service quota)",
        "Cảnh báo rằng xác thực đa yếu tố (MFA) chưa được kích hoạt trên một tài khoản AWS",
        "Cảnh báo về các cuộc gọi API bất thường được thực hiện trong một tài khoản AWS"
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 10: Một công ty có một ứng dụng đang chạy trên hai thể hiện Amazon EC2. Họ muốn giảm năng lực EC2 nhàn rỗi. Tải của ứng dụng rất khó dự báo, và họ muốn giữ hiệu suất sử dụng CPU gần mức 40 phần trăm trên tất cả các thể hiện. Họ nên cấu hình loại Amazon EC2 Auto Scaling nào?",
      options: [
        "Tự động mở rộng quy mô dự đoán (Predictive scaling)",
        "Tự động mở rộng quy mô thủ công (Manual scaling)",
        "Tự động mở rộng quy mô động (Dynamic scaling)",
        "Tự động mở rộng quy mô theo lịch trình (Scheduled scaling)"
      ],
      correct: [2]
    }
  ],
  11: [
    {
      q: "Câu hỏi 1: Phát biểu nào mô tả chính xác về cách khách hàng có thể sử dụng AWS Support?",
      options: [
        "Khách hàng nên liên hệ với Support Concierge của họ để được hỗ trợ kỹ thuật nhanh chóng và hiệu quả.",
        "Khách hàng phải chọn một trong ba gói hỗ trợ: Basic Support, Business Support, và Enterprise Support.",
        "Khách hàng có thể nhận AWS Support cho cả tài khoản thử nghiệm không thuộc môi trường thực tế và tài khoản môi trường thực tế quan trọng đối với doanh nghiệp.",
        "Khách hàng được chỉ định một Quản lý Tài khoản Kỹ thuật (TAM) cho tất cả các gói AWS Support."
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 2: Những yếu tố nào được cân nhắc khi tính toán tổng chi phí sở hữu (TCO) cho Đám mây AWS? (Chọn HAI.)",
      options: [
        "Số lượng vai trò (roles) cần di chuyển lên đám mây",
        "Số lượng nhóm (groups) cần di chuyển lên đám mây",
        "Dung lượng lưu trữ cần di chuyển lên đám mây",
        "Số lượng người dùng cần di chuyển lên đám mây",
        "Số lượng máy chủ cần di chuyển lên đám mây"
      ],
      correct: [2, 4]
    },
    {
      q: "Câu hỏi 3: Phát biểu nào về các vị trí biên (edge locations) là đúng?",
      options: [
        "Amazon CloudFront sử dụng các vị trí biên và bộ đệm biên vùng (Regional edge caches) để phân phối nội dung với độ trễ thấp hơn.",
        "Các điểm hiện diện (points of presence) của AWS cung cấp hai đến ba vị trí biên trên mỗi Vùng (Region).",
        "Bộ đệm biên vùng được sử dụng để lưu bộ đệm dữ liệu được cập nhật thường xuyên và phải được làm mới liên tục.",
        "Mạng lưới toàn cầu của AWS bao gồm một số lượng lớn bộ đệm biên vùng và một số lượng nhỏ hơn các vị trí biên để phân phối nội dung đến người dùng."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 4: Một quản trị viên mạng muốn cấu hình một phân mạng công cộng (public subnet) và định tuyến lưu lượng truy cập đầu vào và đầu ra đến và đi từ một thể hiện Amazon EC2 trong phân mạng công cộng đến internet công cộng. Họ nên sử dụng tính năng đám mây riêng ảo (VPC) nào?",
      options: [
        "Cổng internet (An internet gateway)",
        "Cổng chuyển đổi địa chỉ mạng (A network address translation - NAT gateway)",
        "Chia sẻ VPC (VPC sharing)",
        "Danh sách kiểm soát truy cập mạng (A network access control list - ACL)"
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 5: Phát biểu nào mô tả chính xác về mạng phân phối nội dung (CDN)?",
      options: [
        "Một CDN là một nhóm máy chủ theo Vùng (Regional group of servers).",
        "Một CDN đẩy nhanh tốc độ phân giải tên miền cho các máy chủ ứng dụng.",
        "Một CDN tạo ra các kết nối nhanh giữa các máy chủ gốc (origin servers).",
        "Một CDN lưu bộ đệm (cache) cho các tệp được yêu cầu thường xuyên."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 6: Một công ty cần chạy một đoạn mã ngắn mỗi khi một mục mới được thêm vào một bucket Amazon S3. Lựa chọn tính toán nào đáp ứng nhu cầu với lượng tài nguyên cần cấp phát là ít nhất?",
      options: [
        "Thiết lập đoạn mã để chạy trong một container, và triển khai container trên Amazon Elastic Container Service (Amazon ECS).",
        "Viết một công việc xử lý theo lô (batch job) để chạy đoạn mã trên tất cả các mục mới qua đêm khi có ít sự cạnh tranh tài nguyên hơn. Chạy công việc xử lý theo lô trên các Thể hiện Spot (Spot Instances).",
        "Tạo một hàm AWS Lambda để chạy đoạn mã bất cứ khi nào một mục mới được thêm vào bucket.",
        "Thiết lập một thể hiện Amazon EC2 nhỏ chạy mã để kiểm tra các tệp tải lên mới vào bucket và chạy đoạn mã."
      ],
      correct: [2]
    },
    {
      q: "Câu hỏi 7: Một nhà phát triển cần bộ lưu trữ khối tạm thời (temporary block storage) cho dữ liệu bộ đệm (cache data) trên một thể hiện Amazon EC2. Họ nên chọn lựa chọn nào?",
      options: [
        "Amazon S3",
        "Bộ lưu trữ thể hiện Amazon EC2 (Amazon EC2 instance store)",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Elastic File System (Amazon EFS)"
      ],
      correct: [1]
    },
    {
      q: "Câu hỏi 8: Phát biểu nào về Amazon Elastic Block Store (Amazon EBS) là đúng?",
      options: [
        "Các ổ đĩa Amazon EBS tồn tại độc lập với các thể hiện Amazon EC2 mà chúng được gắn vào.",
        "Các ổ đĩa Amazon EBS không thể thay đổi kích thước.",
        "Các ổ đĩa Amazon EBS được tự động sao chép qua nhiều Khu vực sẵn sàng (Availability Zones).",
        "Các ổ đĩa Amazon EBS không được khuyến nghị cho bộ lưu trữ yêu cầu cập nhật thường xuyên."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 9: Một công ty cần lưu trữ dữ liệu tồn tại lâu dài. Họ cần dữ liệu có sẵn ngay lập tức, nhưng các mô hình truy cập là không thể dự đoán được. Lớp lưu trữ Amazon S3 nào sẽ tiết kiệm chi phí nhất?",
      options: [
        "Amazon S3 Intelligent-Tiering",
        "Amazon S3 Standard",
        "Amazon S3 Glacier",
        "Amazon S3 One Zone-Infrequent Access"
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 10: Phát biểu nào về bảo mật của Amazon S3 Glacier là chính xác?",
      options: [
        "Đối với tất cả các thao tác và tương tác với Amazon S3 Glacier, bạn có thể sử dụng AWS Management Console.",
        "Dữ liệu trong Amazon S3 Glacier là công khai theo mặc định.",
        "Mã hóa ứng dụng phải được khởi tạo trên các đối tượng được lưu trữ vào Amazon S3 Glacier bằng cách sử dụng AWS Management Console hoặc bằng lập trình.",
        "Quyền truy cập vào Amazon S3 Glacier có thể được quản lý bằng các chính sách AWS Identity and Access Management (IAM)."
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 11: Một công ty có một trang web thương mại điện tử yêu cầu lưu trữ và truy xuất siêu dữ liệu (metadata) khách hàng phi cấu trúc để hỗ trợ một trong các microservices của mình. Lựa chọn cơ sở dữ liệu nào phù hợp nhất để lưu trữ dữ liệu này?",
      options: [
        "Amazon Aurora",
        "Amazon RDS",
        "Amazon Redshift",
        "Amazon DynamoDB"
      ],
      correct: [3]
    },
    {
      q: "Câu hỏi 12: Kịch bản nào mô tả tốt nhất một trường hợp sử dụng cho Amazon Aurora?",
      options: [
        "Một công ty cần một cơ sở dữ liệu tương thích với PostgreSQL có độ sẵn sàng cao.",
        "Một công ty cần một kho dữ liệu (data warehouse) có thể truy vấn bằng các công cụ trí tuệ doanh nghiệp (business intelligence) tiêu chuẩn.",
        "Một công ty cần một cơ sở dữ liệu để lưu trữ dữ liệu bán cấu trúc.",
        "Một công ty muốn chạy một cơ sở dữ liệu Oracle trên đám mây."
      ],
      correct: [0]
    },
    {
      q: "Câu hỏi 13: AWS Trusted Advisor hỗ trợ một công ty bắt đầu với AWS như thế nào?",
      options: [
        "AWS Trusted Advisor tự động tăng giới hạn dịch vụ (service quotas) nếu bạn ở gần giới hạn.",
        "AWS Trusted Advisor đưa ra các khuyến nghị về việc cấu hình các tài nguyên AWS của bạn.",
        "AWS Trusted Advisor ngăn chặn truy cập vào các tài nguyên có quyền quá rộng.",
        "AWS Trusted Advisor đưa ra các khuyến nghị về việc di chuyển tài nguyên từ tại chỗ (on-premises) lên đám mây."
      ],
      correct: [1]
    },
    {
      q: "Câu hỏi 14: Loại cảnh báo nào có thể được cung cấp bởi AWS Trusted Advisor?",
      options: [
        "Cảnh báo về truy cập trái phép trong một tài khoản AWS",
        "Cảnh báo rằng xác thực đa yếu tố (MFA) chưa được kích hoạt trên một tài khoản AWS",
        "Cảnh báo rằng một người dùng AWS Identity and Access Management (IAM) đã yêu cầu thay đổi hạn ngạch dịch vụ (service quota)",
        "Cảnh báo về các cuộc gọi API bất thường được thực hiện trong một tài khoản AWS"
      ],
      correct: [1]
    },
    {
      q: "Câu hỏi 15: Kịch bản nào nên được giải quyết bằng Network Load Balancer?",
      options: [
        "Một giải pháp phải cân bằng tải các yêu cầu gRPC đầu vào.",
        "Một giải pháp phải cân bằng tải hàng triệu yêu cầu mỗi giây trong khi vẫn duy trì độ trễ thấp.",
        "Một giải pháp phải hỗ trợ định tuyến lưu lượng truy cập đến một ứng dụng container hóa dựa trên nội dung của các yêu cầu đầu vào.",
        "Một giải pháp phải định tuyến lưu lượng truy cập ở Tầng 7 của mô hình Mô hình Kết nối các Hệ thống Mở (OSI)."
      ],
      correct: [1]
    },
    {
      q: "Câu hỏi 16: Phát biểu nào về AWS Auto Scaling là đúng?",
      options: [
        "Bạn có thể sử dụng Amazon EC2 Auto Scaling hoặc AWS Auto Scaling, nhưng không thể dùng cả hai.",
        "AWS Auto Scaling và Amazon EC2 Auto Scaling là hai thuật ngữ đồng nghĩa.",
        "AWS Auto Scaling có thể được sử dụng để tự động mở rộng quy mô cơ sở dữ liệu Amazon RDS.",
        "AWS Auto Scaling có thể được sử dụng để tự động mở rộng quy mô các bảng và chỉ mục Amazon DynamoDB."
      ],
      correct: [3]
    }
  ]
};
